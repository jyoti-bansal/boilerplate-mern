import { applicationController, Request, Response } from '../../application';
import { HttpStatusCodes } from '../../http';
import BookingService from '../booking-service';
import { BookingCustomRequestBody } from '../types';

export class BookingController {
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
}
