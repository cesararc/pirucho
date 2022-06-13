import { CouponService } from '../services/coupon.service';
import { Coupon } from '../entities/coupon.schemas';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';

@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Post()
  async create(@Res() res, @Body() coupon: Coupon) {
    const newCoupon = await this.couponService.create(coupon);
    return res.status(HttpStatus.CREATED).json({
      newCoupon,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const coupon = await this.couponService.findAll();
    return res.status(HttpStatus.OK).json(coupon);
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const coupon = await this.couponService.findOne(id);
    return res.status(HttpStatus.OK).json({ coupon });
  }

  @Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() coupon: Coupon) {
    const updateCoupon = await this.couponService.update(id, coupon);
    return res.status(HttpStatus.OK).json({ updateCoupon });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const coupon = await this.couponService.remove(id);
    return res.status(HttpStatus.OK).json({ coupon });
  }
}
