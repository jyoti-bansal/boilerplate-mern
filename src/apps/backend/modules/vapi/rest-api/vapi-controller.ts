import { applicationController, Request, Response } from '../../application';
import { BookingAvailabilityCustomRequestBody } from '../../booking-availability';
import BookingAvailabilityService from '../../booking-availability/booking-availability-service';
import BookingService from '../../booking/booking-service';
import { BookingCustomRequestBody } from '../../booking/types';
import { HttpStatusCodes } from '../../http';

export class VapiController {
  createBooking = applicationController(
    async (req: Request<BookingCustomRequestBody>, res: Response) => {
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
            result: booking.confirmationMessage,
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
