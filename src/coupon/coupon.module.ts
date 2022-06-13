import { Global, Module } from '@nestjs/common';
import { CouponController } from './controller/coupon.controller';
import { CouponService } from './services/coupon.service';

@Global()
@Module({
  controllers: [CouponController],
  providers: [CouponService],
})
export class CouponModule {}
