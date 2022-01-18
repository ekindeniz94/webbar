import { Expose } from "class-transformer";

export class PaypalAddressDto {
    @Expose()
    address_line_1: string; // ESpachstr. 1

    @Expose()
    admin_area_1: string; // Baden-Württemberg

    @Expose()
    admin_area_2: string; // Freiburg

    @Expose()
    postal_code: string;  // 41470

    @Expose()
    country_code: string; // DE
  }