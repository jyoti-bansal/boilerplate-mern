import { applicationController, Request, Response } from '../../application';
import BookingAvailabilityService from '../../booking-availability/booking-availability-service';
import BookingService from '../../booking/booking-service';
import { HttpStatusCodes } from '../../http';
import {
  BookingAvailabilityCustomRequestBody,
  VapiBookingCustomRequestBody,
} from '../type';

export class VapiController {
  createBooking = applicationController(
    async (req: Request<VapiBookingCustomRequestBody>, res: Response) => {
      const requestPayload = req.body.message.toolCalls[0];
      const { firstName, phoneNumber, address, schedule } =
        requestPayload.function.arguments;

      const booking = await BookingService.createBooking({
        firstName,
        phoneNumber,
        address,
        schedule,
      });

      res.status(HttpStatusCodes.CREATED).send({
        results: [
          {
            toolCallId: req.body.message.toolCalls[0].id,
            result: `Your booking has been confirmed for the time slot from ${booking.schedule.startTime} to ${booking.schedule.endTime}`,
          },
        ],
      });
    },
  );

  getAvailableBookingSlots = applicationController(
    async (
      req: Request<BookingAvailabilityCustomRequestBody>,
      res: Response,
    ) => {
      const requestPayload = req.body.message.toolCalls[0];
      const { startDate, showForDays } = requestPayload.function.arguments;

      const availability =
        await BookingAvailabilityService.getAvailableBookingSlots({
          startDate,
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
