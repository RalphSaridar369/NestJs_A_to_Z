import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { ValidateCustomerAuthMiddleware } from './middlewares/validate-customer-auth.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateCustomerMiddleware, ValidateCustomerAuthMiddleware)
      .forRoutes({
        path: 'customers/search/:id',
        method: RequestMethod.GET,
      });

    //!! comment one of these code blocks or it will face conflicts
    // or we can use all routes and excludes routes we don't want the middleware to apply to
    consumer
      .apply(ValidateCustomerMiddleware, ValidateCustomerAuthMiddleware)
      .exclude({
        path: '/customers',
        method: RequestMethod.POST,
      })
      .forRoutes(CustomersController);
  }
}
