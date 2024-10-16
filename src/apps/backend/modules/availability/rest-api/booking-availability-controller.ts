import { applicationController, Request, Response } from '../../application';
import { HttpStatusCodes } from '../../http';
import { DateUtils } from '../../util/date-utils';
import BookingAvailabilityService from '../booking-availability-service';
import { BookingAvailabilityCustomRequestBody } from '../types';

export class BookingAvailabilityController {
  getAvailableBookingSlots = applicationController(
    async (
      req: Request<BookingAvailabilityCustomRequestBody>,
      res: Response,
    ) => {
      const requestPayload = req.body.message.toolCalls[0];
      const { startDate, showForDays } = requestPayload.function.arguments;

      const parsedStartDate = DateUtils.parseDate(startDate);

      const availability =
        await BookingAvailabilityService.getAvailableBookingSlots({
          startDate: parsedStartDate,
          showForDays,
        });

      res.status(HttpStatusCodes.OK).send({
        results: [
          {
            toolCallId: requestPayload.id,
            result: availability,
          },
        ],
      });
    },
  );
}
