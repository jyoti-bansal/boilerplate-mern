import { applicationController, Request, Response } from '../../application';
import { HttpStatusCodes } from '../../http';
import { DateUtils } from '../../util/date-utils';
import AvailabilityService from '../availability-service';
import { AvailabilityCustomRequestBody } from '../types';

export class AvailabilityController {
  getAvailability = applicationController(
    async (req: Request<AvailabilityCustomRequestBody>, res: Response) => {
      const requestPayload = req.body.message.toolCalls[0];
      const { startDate, showForDays } = requestPayload.function.arguments;

      const parsedStartDate = DateUtils.parseDate(startDate);

      const availability = await AvailabilityService.getAvailability({
        startDate: parsedStartDate,
        showForDays,
      });

      const formattedStartDate = DateUtils.formatDate(parsedStartDate);

      res.status(HttpStatusCodes.OK).send({
        results: [
          {
            toolCallId: requestPayload.id,
            result: `Available slots for the next ${showForDays} days starting from ${formattedStartDate}: ${JSON.stringify(availability)}`,
          },
        ],
      });
    },
  );
}
