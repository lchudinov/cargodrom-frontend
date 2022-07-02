import { Contractor } from './../../../api/custom_models/contractor';
export const contractorMockup: Contractor =
{
  "id": 7,
  "name": "Поставщик 1",
  "ind": 111,
  "name_f": "",
  "name_i": "",
  "name_o": "",
  "company_name": "",
  "email": "",
  "time_add": "2022-06-20 12:23:06",
  "time_edit": "0000-00-00 00:00:00",
  "user_id": 327,
  "owner_id": 327,
  "country_id": 1,
  "city_id": 1,
  "address": "ул. Ленина, 12",
  "phone": "+7 343 111 22 33",
  "web": "",
  "language_id": "ru",
  "type_id": 1,
  "association_id": [],
  "tax_id": 1,
  "request_format_id": "text",
  "rating_nps": 0,
  "user_rating_nps": 0,
  "review_count": 0,
  "review_positive_count": 0,
  "review_negative_count": 0,
  "review_neutral_count": 0,
  "order_count": 0,
  "trade_count": 0,
  "trade_success_count": 0,
  "trade_fail_count": 0,
  "exclude_from_trade": 0,
  "contact_count": 0,
  "types": "",
  "avg_answer_time": 0,
  "contact_name": "Имя контакта фамилия контакта Отчество контакта<span>Москва</span>",
  "contact_phone": "",
  "contact_email": "",
  "contact_city": "",
  "cargo": "",
  "access": 0,
  "country_name": "Россия",
  "city_name": "Москва",
  "tax_name": "ОСНО - общая система налогообложения",
  "language_name": "Русский",
  "rating_nps_text": "0/10 NPS",
  "user_rating_nps_text": "0/10 NPS",
  "trade_percent": 0,
  "type_name": null,
  "association_name": "",
  "contacts": [
    {
      "id": 8,
      "owner_id": 327,
      "user_id": 327,
      "contractor_id": 7,
      "name_f": "Имя контакта",
      "name_i": "фамилия контакта",
      "name_o": "Отчество контакта",
      "name": "Имя контакта фамилия контакта Отчество контакта",
      "position": "Менеджер",
      "city_id": 1,
      "phone": "+7 111 222 33 44",
      "mobile_phone": "",
      "email": "rrr@mmm.ru",
      "skype": "",
      "telegram": "",
      "whatsapp": "",
      "wechat": "",
      "responsible_direction": [
        "import",
        "export"
      ],
      "responsible_param": {
        "1": {
          "1": [
            "avia_lcl",
            "avia_fcl"
          ]
        }
      },
      "time_add": "2022-06-20 12:28:58",
      "time_edit": "2022-06-20 13:09:46",
      "city_name": "Москва"
    }
  ],
  "contact_info": "<span>Тел.:</span> +7 111 222 33 44, <span>email:</span> rrr@mmm.ru"
};

export function generateMockupContractors(contractor: Contractor | undefined, count: number, start: number, total: number): {items: Contractor[], total: number} {
  const contractorCount = Math.min(count, total - start);
  const contractors = new Array<Contractor>(contractorCount).fill(contractor? contractor : contractorMockup);
  return {
    items: contractors,
    total: total
  };
}