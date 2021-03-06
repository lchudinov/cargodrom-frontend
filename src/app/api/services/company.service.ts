/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';



/**
 * Работа с компаниями
 */
@Injectable({
  providedIn: 'root',
})
export class CompanyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation companyList
   */
  static readonly CompanyListPath = '/company_list';

  /**
   * Компания: список.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyList()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyList$Response(params?: {
  }): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование полное
 */
'name'?: string;

/**
 * Наименование сокращенное
 */
'name_short'?: string;

/**
 * Юридический адрес
 */
'jur_address'?: string;

/**
 * Почтовый адрес
 */
'post_address'?: string;

/**
 * ИНН
 */
'inn'?: string;

/**
 * КПП
 */
'kpp'?: string;

/**
 * ОГРН
 */
'ogrn'?: string;

/**
 * ОКПО
 */
'okpo'?: string;

/**
 * Номер телефона
 */
'phone'?: string;

/**
 * Email
 */
'email'?: string;

/**
 * Вебсайт
 */
'website'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Ф.И.О.
 */
'responsible_person_fio'?: string;

/**
 * Должность
 */
'responsible_person_position'?: string;

/**
 * Основание
 */
'responsible_person_base'?: string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio'?: string;

/**
 * Наименование
 */
'bank_name'?: string;

/**
 * БИК
 */
'bank_bik'?: string;

/**
 * КПП
 */
'bank_kpp'?: string;

/**
 * Расчетный счет
 */
'bank_rs'?: string;

/**
 * Корреспондентский счет
 */
'bank_ks'?: string;

/**
 * Валюта счета
 */
'bank_currency'?: string;

/**
 * Full name
 */
'noresident_name'?: string;

/**
 * Address
 */
'noresident_address'?: string;

/**
 * Phone / fax
 */
'noresident_phone'?: string;

/**
 * Email
 */
'noresident_email'?: string;

/**
 * Website
 */
'noresident_website'?: string;

/**
 * Full name
 */
'noresident_signatory_fio'?: string;

/**
 * Position
 */
'noresident_signatory_position'?: string;

/**
 * Bank name
 */
'noresident_bank_name'?: string;

/**
 * Bank address
 */
'noresident_bank_address'?: string;

/**
 * Account Number
 */
'noresident_bank_rs'?: string;

/**
 * Account currency
 */
'noresident_bank_currency'?: string;

/**
 * Account name
 */
'noresident_bank_rs_name'?: string;

/**
 * Swift code
 */
'noresident_bank_swift'?: string;

/**
 * Intermediary bank
 */
'noresident_bank_im'?: string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system'?: number;

/**
 * Основная валюта счетов
 */
'base_currency'?: string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyListPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * Наименование полное
         */
        'name'?: string;
        
        /**
         * Наименование сокращенное
         */
        'name_short'?: string;
        
        /**
         * Юридический адрес
         */
        'jur_address'?: string;
        
        /**
         * Почтовый адрес
         */
        'post_address'?: string;
        
        /**
         * ИНН
         */
        'inn'?: string;
        
        /**
         * КПП
         */
        'kpp'?: string;
        
        /**
         * ОГРН
         */
        'ogrn'?: string;
        
        /**
         * ОКПО
         */
        'okpo'?: string;
        
        /**
         * Номер телефона
         */
        'phone'?: string;
        
        /**
         * Email
         */
        'email'?: string;
        
        /**
         * Вебсайт
         */
        'website'?: string;
        
        /**
         * Skype
         */
        'skype'?: string;
        
        /**
         * Ф.И.О.
         */
        'responsible_person_fio'?: string;
        
        /**
         * Должность
         */
        'responsible_person_position'?: string;
        
        /**
         * Основание
         */
        'responsible_person_base'?: string;
        
        /**
         * Ф.И.О.
         */
        'chief_accountant_fio'?: string;
        
        /**
         * Наименование
         */
        'bank_name'?: string;
        
        /**
         * БИК
         */
        'bank_bik'?: string;
        
        /**
         * КПП
         */
        'bank_kpp'?: string;
        
        /**
         * Расчетный счет
         */
        'bank_rs'?: string;
        
        /**
         * Корреспондентский счет
         */
        'bank_ks'?: string;
        
        /**
         * Валюта счета
         */
        'bank_currency'?: string;
        
        /**
         * Full name
         */
        'noresident_name'?: string;
        
        /**
         * Address
         */
        'noresident_address'?: string;
        
        /**
         * Phone / fax
         */
        'noresident_phone'?: string;
        
        /**
         * Email
         */
        'noresident_email'?: string;
        
        /**
         * Website
         */
        'noresident_website'?: string;
        
        /**
         * Full name
         */
        'noresident_signatory_fio'?: string;
        
        /**
         * Position
         */
        'noresident_signatory_position'?: string;
        
        /**
         * Bank name
         */
        'noresident_bank_name'?: string;
        
        /**
         * Bank address
         */
        'noresident_bank_address'?: string;
        
        /**
         * Account Number
         */
        'noresident_bank_rs'?: string;
        
        /**
         * Account currency
         */
        'noresident_bank_currency'?: string;
        
        /**
         * Account name
         */
        'noresident_bank_rs_name'?: string;
        
        /**
         * Swift code
         */
        'noresident_bank_swift'?: string;
        
        /**
         * Intermediary bank
         */
        'noresident_bank_im'?: string;
        
        /**
         * Система налогообложения (ID берем из запроса - settings_tax)
         */
        'tax_system'?: number;
        
        /**
         * Основная валюта счетов
         */
        'base_currency'?: string;
        
        /**
         * Порядок для сортировки (меньше - выше)
         */
        'num'?: number;
        
        /**
         * Главная фирма
         */
        'general'?: boolean;
        
        /**
         * Время создания
         */
        'time_add'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>>;
      })
    );
  }

  /**
   * Компания: список.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyList(params?: {
  }): Observable<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование полное
 */
'name'?: string;

/**
 * Наименование сокращенное
 */
'name_short'?: string;

/**
 * Юридический адрес
 */
'jur_address'?: string;

/**
 * Почтовый адрес
 */
'post_address'?: string;

/**
 * ИНН
 */
'inn'?: string;

/**
 * КПП
 */
'kpp'?: string;

/**
 * ОГРН
 */
'ogrn'?: string;

/**
 * ОКПО
 */
'okpo'?: string;

/**
 * Номер телефона
 */
'phone'?: string;

/**
 * Email
 */
'email'?: string;

/**
 * Вебсайт
 */
'website'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Ф.И.О.
 */
'responsible_person_fio'?: string;

/**
 * Должность
 */
'responsible_person_position'?: string;

/**
 * Основание
 */
'responsible_person_base'?: string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio'?: string;

/**
 * Наименование
 */
'bank_name'?: string;

/**
 * БИК
 */
'bank_bik'?: string;

/**
 * КПП
 */
'bank_kpp'?: string;

/**
 * Расчетный счет
 */
'bank_rs'?: string;

/**
 * Корреспондентский счет
 */
'bank_ks'?: string;

/**
 * Валюта счета
 */
'bank_currency'?: string;

/**
 * Full name
 */
'noresident_name'?: string;

/**
 * Address
 */
'noresident_address'?: string;

/**
 * Phone / fax
 */
'noresident_phone'?: string;

/**
 * Email
 */
'noresident_email'?: string;

/**
 * Website
 */
'noresident_website'?: string;

/**
 * Full name
 */
'noresident_signatory_fio'?: string;

/**
 * Position
 */
'noresident_signatory_position'?: string;

/**
 * Bank name
 */
'noresident_bank_name'?: string;

/**
 * Bank address
 */
'noresident_bank_address'?: string;

/**
 * Account Number
 */
'noresident_bank_rs'?: string;

/**
 * Account currency
 */
'noresident_bank_currency'?: string;

/**
 * Account name
 */
'noresident_bank_rs_name'?: string;

/**
 * Swift code
 */
'noresident_bank_swift'?: string;

/**
 * Intermediary bank
 */
'noresident_bank_im'?: string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system'?: number;

/**
 * Основная валюта счетов
 */
'base_currency'?: string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {

    return this.companyList$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование полное
 */
'name'?: string;

/**
 * Наименование сокращенное
 */
'name_short'?: string;

/**
 * Юридический адрес
 */
'jur_address'?: string;

/**
 * Почтовый адрес
 */
'post_address'?: string;

/**
 * ИНН
 */
'inn'?: string;

/**
 * КПП
 */
'kpp'?: string;

/**
 * ОГРН
 */
'ogrn'?: string;

/**
 * ОКПО
 */
'okpo'?: string;

/**
 * Номер телефона
 */
'phone'?: string;

/**
 * Email
 */
'email'?: string;

/**
 * Вебсайт
 */
'website'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Ф.И.О.
 */
'responsible_person_fio'?: string;

/**
 * Должность
 */
'responsible_person_position'?: string;

/**
 * Основание
 */
'responsible_person_base'?: string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio'?: string;

/**
 * Наименование
 */
'bank_name'?: string;

/**
 * БИК
 */
'bank_bik'?: string;

/**
 * КПП
 */
'bank_kpp'?: string;

/**
 * Расчетный счет
 */
'bank_rs'?: string;

/**
 * Корреспондентский счет
 */
'bank_ks'?: string;

/**
 * Валюта счета
 */
'bank_currency'?: string;

/**
 * Full name
 */
'noresident_name'?: string;

/**
 * Address
 */
'noresident_address'?: string;

/**
 * Phone / fax
 */
'noresident_phone'?: string;

/**
 * Email
 */
'noresident_email'?: string;

/**
 * Website
 */
'noresident_website'?: string;

/**
 * Full name
 */
'noresident_signatory_fio'?: string;

/**
 * Position
 */
'noresident_signatory_position'?: string;

/**
 * Bank name
 */
'noresident_bank_name'?: string;

/**
 * Bank address
 */
'noresident_bank_address'?: string;

/**
 * Account Number
 */
'noresident_bank_rs'?: string;

/**
 * Account currency
 */
'noresident_bank_currency'?: string;

/**
 * Account name
 */
'noresident_bank_rs_name'?: string;

/**
 * Swift code
 */
'noresident_bank_swift'?: string;

/**
 * Intermediary bank
 */
'noresident_bank_im'?: string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system'?: number;

/**
 * Основная валюта счетов
 */
'base_currency'?: string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>>) => r.body as Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование полное
 */
'name'?: string;

/**
 * Наименование сокращенное
 */
'name_short'?: string;

/**
 * Юридический адрес
 */
'jur_address'?: string;

/**
 * Почтовый адрес
 */
'post_address'?: string;

/**
 * ИНН
 */
'inn'?: string;

/**
 * КПП
 */
'kpp'?: string;

/**
 * ОГРН
 */
'ogrn'?: string;

/**
 * ОКПО
 */
'okpo'?: string;

/**
 * Номер телефона
 */
'phone'?: string;

/**
 * Email
 */
'email'?: string;

/**
 * Вебсайт
 */
'website'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Ф.И.О.
 */
'responsible_person_fio'?: string;

/**
 * Должность
 */
'responsible_person_position'?: string;

/**
 * Основание
 */
'responsible_person_base'?: string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio'?: string;

/**
 * Наименование
 */
'bank_name'?: string;

/**
 * БИК
 */
'bank_bik'?: string;

/**
 * КПП
 */
'bank_kpp'?: string;

/**
 * Расчетный счет
 */
'bank_rs'?: string;

/**
 * Корреспондентский счет
 */
'bank_ks'?: string;

/**
 * Валюта счета
 */
'bank_currency'?: string;

/**
 * Full name
 */
'noresident_name'?: string;

/**
 * Address
 */
'noresident_address'?: string;

/**
 * Phone / fax
 */
'noresident_phone'?: string;

/**
 * Email
 */
'noresident_email'?: string;

/**
 * Website
 */
'noresident_website'?: string;

/**
 * Full name
 */
'noresident_signatory_fio'?: string;

/**
 * Position
 */
'noresident_signatory_position'?: string;

/**
 * Bank name
 */
'noresident_bank_name'?: string;

/**
 * Bank address
 */
'noresident_bank_address'?: string;

/**
 * Account Number
 */
'noresident_bank_rs'?: string;

/**
 * Account currency
 */
'noresident_bank_currency'?: string;

/**
 * Account name
 */
'noresident_bank_rs_name'?: string;

/**
 * Swift code
 */
'noresident_bank_swift'?: string;

/**
 * Intermediary bank
 */
'noresident_bank_im'?: string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system'?: number;

/**
 * Основная валюта счетов
 */
'base_currency'?: string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>)
    );
  }

  /**
   * Path part for operation companyInfo
   */
  static readonly CompanyInfoPath = '/company_info';

  /**
   * Компания: данные.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyInfo$Response(params: {

    /**
     * ID компании
     */
    id: number;
  }): Observable<StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Наименование полное
 */
'name'?: string;

/**
 * Наименование сокращенное
 */
'name_short'?: string;

/**
 * Юридический адрес
 */
'jur_address'?: string;

/**
 * Почтовый адрес
 */
'post_address'?: string;

/**
 * ИНН
 */
'inn'?: string;

/**
 * КПП
 */
'kpp'?: string;

/**
 * ОГРН
 */
'ogrn'?: string;

/**
 * ОКПО
 */
'okpo'?: string;

/**
 * Номер телефона
 */
'phone'?: string;

/**
 * Email
 */
'email'?: string;

/**
 * Вебсайт
 */
'website'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Ф.И.О.
 */
'responsible_person_fio'?: string;

/**
 * Должность
 */
'responsible_person_position'?: string;

/**
 * Основание
 */
'responsible_person_base'?: string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio'?: string;

/**
 * Наименование
 */
'bank_name'?: string;

/**
 * БИК
 */
'bank_bik'?: string;

/**
 * КПП
 */
'bank_kpp'?: string;

/**
 * Расчетный счет
 */
'bank_rs'?: string;

/**
 * Корреспондентский счет
 */
'bank_ks'?: string;

/**
 * Валюта счета
 */
'bank_currency'?: string;

/**
 * Full name
 */
'noresident_name'?: string;

/**
 * Address
 */
'noresident_address'?: string;

/**
 * Phone / fax
 */
'noresident_phone'?: string;

/**
 * Email
 */
'noresident_email'?: string;

/**
 * Website
 */
'noresident_website'?: string;

/**
 * Full name
 */
'noresident_signatory_fio'?: string;

/**
 * Position
 */
'noresident_signatory_position'?: string;

/**
 * Bank name
 */
'noresident_bank_name'?: string;

/**
 * Bank address
 */
'noresident_bank_address'?: string;

/**
 * Account Number
 */
'noresident_bank_rs'?: string;

/**
 * Account currency
 */
'noresident_bank_currency'?: string;

/**
 * Account name
 */
'noresident_bank_rs_name'?: string;

/**
 * Swift code
 */
'noresident_bank_swift'?: string;

/**
 * Intermediary bank
 */
'noresident_bank_im'?: string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system'?: number;

/**
 * Основная валюта счетов
 */
'base_currency'?: string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * Наименование полное
         */
        'name'?: string;
        
        /**
         * Наименование сокращенное
         */
        'name_short'?: string;
        
        /**
         * Юридический адрес
         */
        'jur_address'?: string;
        
        /**
         * Почтовый адрес
         */
        'post_address'?: string;
        
        /**
         * ИНН
         */
        'inn'?: string;
        
        /**
         * КПП
         */
        'kpp'?: string;
        
        /**
         * ОГРН
         */
        'ogrn'?: string;
        
        /**
         * ОКПО
         */
        'okpo'?: string;
        
        /**
         * Номер телефона
         */
        'phone'?: string;
        
        /**
         * Email
         */
        'email'?: string;
        
        /**
         * Вебсайт
         */
        'website'?: string;
        
        /**
         * Skype
         */
        'skype'?: string;
        
        /**
         * Ф.И.О.
         */
        'responsible_person_fio'?: string;
        
        /**
         * Должность
         */
        'responsible_person_position'?: string;
        
        /**
         * Основание
         */
        'responsible_person_base'?: string;
        
        /**
         * Ф.И.О.
         */
        'chief_accountant_fio'?: string;
        
        /**
         * Наименование
         */
        'bank_name'?: string;
        
        /**
         * БИК
         */
        'bank_bik'?: string;
        
        /**
         * КПП
         */
        'bank_kpp'?: string;
        
        /**
         * Расчетный счет
         */
        'bank_rs'?: string;
        
        /**
         * Корреспондентский счет
         */
        'bank_ks'?: string;
        
        /**
         * Валюта счета
         */
        'bank_currency'?: string;
        
        /**
         * Full name
         */
        'noresident_name'?: string;
        
        /**
         * Address
         */
        'noresident_address'?: string;
        
        /**
         * Phone / fax
         */
        'noresident_phone'?: string;
        
        /**
         * Email
         */
        'noresident_email'?: string;
        
        /**
         * Website
         */
        'noresident_website'?: string;
        
        /**
         * Full name
         */
        'noresident_signatory_fio'?: string;
        
        /**
         * Position
         */
        'noresident_signatory_position'?: string;
        
        /**
         * Bank name
         */
        'noresident_bank_name'?: string;
        
        /**
         * Bank address
         */
        'noresident_bank_address'?: string;
        
        /**
         * Account Number
         */
        'noresident_bank_rs'?: string;
        
        /**
         * Account currency
         */
        'noresident_bank_currency'?: string;
        
        /**
         * Account name
         */
        'noresident_bank_rs_name'?: string;
        
        /**
         * Swift code
         */
        'noresident_bank_swift'?: string;
        
        /**
         * Intermediary bank
         */
        'noresident_bank_im'?: string;
        
        /**
         * Система налогообложения (ID берем из запроса - settings_tax)
         */
        'tax_system'?: number;
        
        /**
         * Основная валюта счетов
         */
        'base_currency'?: string;
        
        /**
         * Порядок для сортировки (меньше - выше)
         */
        'num'?: number;
        
        /**
         * Главная фирма
         */
        'general'?: boolean;
        
        /**
         * Время создания
         */
        'time_add'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>;
      })
    );
  }

  /**
   * Компания: данные.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyInfo(params: {

    /**
     * ID компании
     */
    id: number;
  }): Observable<{

/**
 * ID
 */
'id': number;

/**
 * Наименование полное
 */
'name'?: string;

/**
 * Наименование сокращенное
 */
'name_short'?: string;

/**
 * Юридический адрес
 */
'jur_address'?: string;

/**
 * Почтовый адрес
 */
'post_address'?: string;

/**
 * ИНН
 */
'inn'?: string;

/**
 * КПП
 */
'kpp'?: string;

/**
 * ОГРН
 */
'ogrn'?: string;

/**
 * ОКПО
 */
'okpo'?: string;

/**
 * Номер телефона
 */
'phone'?: string;

/**
 * Email
 */
'email'?: string;

/**
 * Вебсайт
 */
'website'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Ф.И.О.
 */
'responsible_person_fio'?: string;

/**
 * Должность
 */
'responsible_person_position'?: string;

/**
 * Основание
 */
'responsible_person_base'?: string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio'?: string;

/**
 * Наименование
 */
'bank_name'?: string;

/**
 * БИК
 */
'bank_bik'?: string;

/**
 * КПП
 */
'bank_kpp'?: string;

/**
 * Расчетный счет
 */
'bank_rs'?: string;

/**
 * Корреспондентский счет
 */
'bank_ks'?: string;

/**
 * Валюта счета
 */
'bank_currency'?: string;

/**
 * Full name
 */
'noresident_name'?: string;

/**
 * Address
 */
'noresident_address'?: string;

/**
 * Phone / fax
 */
'noresident_phone'?: string;

/**
 * Email
 */
'noresident_email'?: string;

/**
 * Website
 */
'noresident_website'?: string;

/**
 * Full name
 */
'noresident_signatory_fio'?: string;

/**
 * Position
 */
'noresident_signatory_position'?: string;

/**
 * Bank name
 */
'noresident_bank_name'?: string;

/**
 * Bank address
 */
'noresident_bank_address'?: string;

/**
 * Account Number
 */
'noresident_bank_rs'?: string;

/**
 * Account currency
 */
'noresident_bank_currency'?: string;

/**
 * Account name
 */
'noresident_bank_rs_name'?: string;

/**
 * Swift code
 */
'noresident_bank_swift'?: string;

/**
 * Intermediary bank
 */
'noresident_bank_im'?: string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system'?: number;

/**
 * Основная валюта счетов
 */
'base_currency'?: string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}> {

    return this.companyInfo$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Наименование полное
 */
'name'?: string;

/**
 * Наименование сокращенное
 */
'name_short'?: string;

/**
 * Юридический адрес
 */
'jur_address'?: string;

/**
 * Почтовый адрес
 */
'post_address'?: string;

/**
 * ИНН
 */
'inn'?: string;

/**
 * КПП
 */
'kpp'?: string;

/**
 * ОГРН
 */
'ogrn'?: string;

/**
 * ОКПО
 */
'okpo'?: string;

/**
 * Номер телефона
 */
'phone'?: string;

/**
 * Email
 */
'email'?: string;

/**
 * Вебсайт
 */
'website'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Ф.И.О.
 */
'responsible_person_fio'?: string;

/**
 * Должность
 */
'responsible_person_position'?: string;

/**
 * Основание
 */
'responsible_person_base'?: string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio'?: string;

/**
 * Наименование
 */
'bank_name'?: string;

/**
 * БИК
 */
'bank_bik'?: string;

/**
 * КПП
 */
'bank_kpp'?: string;

/**
 * Расчетный счет
 */
'bank_rs'?: string;

/**
 * Корреспондентский счет
 */
'bank_ks'?: string;

/**
 * Валюта счета
 */
'bank_currency'?: string;

/**
 * Full name
 */
'noresident_name'?: string;

/**
 * Address
 */
'noresident_address'?: string;

/**
 * Phone / fax
 */
'noresident_phone'?: string;

/**
 * Email
 */
'noresident_email'?: string;

/**
 * Website
 */
'noresident_website'?: string;

/**
 * Full name
 */
'noresident_signatory_fio'?: string;

/**
 * Position
 */
'noresident_signatory_position'?: string;

/**
 * Bank name
 */
'noresident_bank_name'?: string;

/**
 * Bank address
 */
'noresident_bank_address'?: string;

/**
 * Account Number
 */
'noresident_bank_rs'?: string;

/**
 * Account currency
 */
'noresident_bank_currency'?: string;

/**
 * Account name
 */
'noresident_bank_rs_name'?: string;

/**
 * Swift code
 */
'noresident_bank_swift'?: string;

/**
 * Intermediary bank
 */
'noresident_bank_im'?: string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system'?: number;

/**
 * Основная валюта счетов
 */
'base_currency'?: string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>) => r.body as {

/**
 * ID
 */
'id': number;

/**
 * Наименование полное
 */
'name'?: string;

/**
 * Наименование сокращенное
 */
'name_short'?: string;

/**
 * Юридический адрес
 */
'jur_address'?: string;

/**
 * Почтовый адрес
 */
'post_address'?: string;

/**
 * ИНН
 */
'inn'?: string;

/**
 * КПП
 */
'kpp'?: string;

/**
 * ОГРН
 */
'ogrn'?: string;

/**
 * ОКПО
 */
'okpo'?: string;

/**
 * Номер телефона
 */
'phone'?: string;

/**
 * Email
 */
'email'?: string;

/**
 * Вебсайт
 */
'website'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Ф.И.О.
 */
'responsible_person_fio'?: string;

/**
 * Должность
 */
'responsible_person_position'?: string;

/**
 * Основание
 */
'responsible_person_base'?: string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio'?: string;

/**
 * Наименование
 */
'bank_name'?: string;

/**
 * БИК
 */
'bank_bik'?: string;

/**
 * КПП
 */
'bank_kpp'?: string;

/**
 * Расчетный счет
 */
'bank_rs'?: string;

/**
 * Корреспондентский счет
 */
'bank_ks'?: string;

/**
 * Валюта счета
 */
'bank_currency'?: string;

/**
 * Full name
 */
'noresident_name'?: string;

/**
 * Address
 */
'noresident_address'?: string;

/**
 * Phone / fax
 */
'noresident_phone'?: string;

/**
 * Email
 */
'noresident_email'?: string;

/**
 * Website
 */
'noresident_website'?: string;

/**
 * Full name
 */
'noresident_signatory_fio'?: string;

/**
 * Position
 */
'noresident_signatory_position'?: string;

/**
 * Bank name
 */
'noresident_bank_name'?: string;

/**
 * Bank address
 */
'noresident_bank_address'?: string;

/**
 * Account Number
 */
'noresident_bank_rs'?: string;

/**
 * Account currency
 */
'noresident_bank_currency'?: string;

/**
 * Account name
 */
'noresident_bank_rs_name'?: string;

/**
 * Swift code
 */
'noresident_bank_swift'?: string;

/**
 * Intermediary bank
 */
'noresident_bank_im'?: string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system'?: number;

/**
 * Основная валюта счетов
 */
'base_currency'?: string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
})
    );
  }

  /**
   * Path part for operation companyCreate
   */
  static readonly CompanyCreatePath = '/company_create';

  /**
   * Компания: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCreate$Response(params?: {
    body?: {

/**
 * Наименование полное
 */
'name': string;

/**
 * Наименование сокращенное
 */
'name_short': string;

/**
 * Юридический адрес
 */
'jur_address': string;

/**
 * Почтовый адрес
 */
'post_address': string;

/**
 * ИНН
 */
'inn': string;

/**
 * КПП
 */
'kpp': string;

/**
 * ОГРН
 */
'ogrn': string;

/**
 * ОКПО
 */
'okpo': string;

/**
 * Номер телефона
 */
'phone': string;

/**
 * Email
 */
'email': string;

/**
 * Вебсайт
 */
'website': string;

/**
 * Skype
 */
'skype': string;

/**
 * Ф.И.О.
 */
'responsible_person_fio': string;

/**
 * Должность
 */
'responsible_person_position': string;

/**
 * Основание
 */
'responsible_person_base': string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio': string;

/**
 * Наименование
 */
'bank_name': string;

/**
 * БИК
 */
'bank_bik': string;

/**
 * КПП
 */
'bank_kpp': string;

/**
 * Расчетный счет
 */
'bank_rs': string;

/**
 * Корреспондентский счет
 */
'bank_ks': string;

/**
 * Валюта счета
 */
'bank_currency': string;

/**
 * Full name
 */
'noresident_name': string;

/**
 * Address
 */
'noresident_address': string;

/**
 * Phone / fax
 */
'noresident_phone': string;

/**
 * Email
 */
'noresident_email': string;

/**
 * Website
 */
'noresident_website': string;

/**
 * Full name
 */
'noresident_signatory_fio': string;

/**
 * Position
 */
'noresident_signatory_position': string;

/**
 * Bank name
 */
'noresident_bank_name': string;

/**
 * Bank address
 */
'noresident_bank_address': string;

/**
 * Account Number
 */
'noresident_bank_rs': string;

/**
 * Account currency
 */
'noresident_bank_currency': string;

/**
 * Account name
 */
'noresident_bank_rs_name': string;

/**
 * Swift code
 */
'noresident_bank_swift': string;

/**
 * Intermediary bank
 */
'noresident_bank_im': string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system': number;

/**
 * Основная валюта счетов
 */
'base_currency': string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;
}
  }): Observable<StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * ID созданной записи
         */
        'id': number;
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Компания: добавление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCreate(params?: {
    body?: {

/**
 * Наименование полное
 */
'name': string;

/**
 * Наименование сокращенное
 */
'name_short': string;

/**
 * Юридический адрес
 */
'jur_address': string;

/**
 * Почтовый адрес
 */
'post_address': string;

/**
 * ИНН
 */
'inn': string;

/**
 * КПП
 */
'kpp': string;

/**
 * ОГРН
 */
'ogrn': string;

/**
 * ОКПО
 */
'okpo': string;

/**
 * Номер телефона
 */
'phone': string;

/**
 * Email
 */
'email': string;

/**
 * Вебсайт
 */
'website': string;

/**
 * Skype
 */
'skype': string;

/**
 * Ф.И.О.
 */
'responsible_person_fio': string;

/**
 * Должность
 */
'responsible_person_position': string;

/**
 * Основание
 */
'responsible_person_base': string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio': string;

/**
 * Наименование
 */
'bank_name': string;

/**
 * БИК
 */
'bank_bik': string;

/**
 * КПП
 */
'bank_kpp': string;

/**
 * Расчетный счет
 */
'bank_rs': string;

/**
 * Корреспондентский счет
 */
'bank_ks': string;

/**
 * Валюта счета
 */
'bank_currency': string;

/**
 * Full name
 */
'noresident_name': string;

/**
 * Address
 */
'noresident_address': string;

/**
 * Phone / fax
 */
'noresident_phone': string;

/**
 * Email
 */
'noresident_email': string;

/**
 * Website
 */
'noresident_website': string;

/**
 * Full name
 */
'noresident_signatory_fio': string;

/**
 * Position
 */
'noresident_signatory_position': string;

/**
 * Bank name
 */
'noresident_bank_name': string;

/**
 * Bank address
 */
'noresident_bank_address': string;

/**
 * Account Number
 */
'noresident_bank_rs': string;

/**
 * Account currency
 */
'noresident_bank_currency': string;

/**
 * Account name
 */
'noresident_bank_rs_name': string;

/**
 * Swift code
 */
'noresident_bank_swift': string;

/**
 * Intermediary bank
 */
'noresident_bank_im': string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system': number;

/**
 * Основная валюта счетов
 */
'base_currency': string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;
}
  }): Observable<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyCreate$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation companyUpdate
   */
  static readonly CompanyUpdatePath = '/company_update';

  /**
   * Компания: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyUpdate$Response(params?: {
    body?: {

/**
 * ID
 */
'id': number;

/**
 * Наименование полное
 */
'name'?: string;

/**
 * Наименование сокращенное
 */
'name_short'?: string;

/**
 * Юридический адрес
 */
'jur_address'?: string;

/**
 * Почтовый адрес
 */
'post_address'?: string;

/**
 * ИНН
 */
'inn'?: string;

/**
 * КПП
 */
'kpp'?: string;

/**
 * ОГРН
 */
'ogrn'?: string;

/**
 * ОКПО
 */
'okpo'?: string;

/**
 * Номер телефона
 */
'phone'?: string;

/**
 * Email
 */
'email'?: string;

/**
 * Вебсайт
 */
'website'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Ф.И.О.
 */
'responsible_person_fio'?: string;

/**
 * Должность
 */
'responsible_person_position'?: string;

/**
 * Основание
 */
'responsible_person_base'?: string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio'?: string;

/**
 * Наименование
 */
'bank_name'?: string;

/**
 * БИК
 */
'bank_bik'?: string;

/**
 * КПП
 */
'bank_kpp'?: string;

/**
 * Расчетный счет
 */
'bank_rs'?: string;

/**
 * Корреспондентский счет
 */
'bank_ks'?: string;

/**
 * Валюта счета
 */
'bank_currency'?: string;

/**
 * Full name
 */
'noresident_name'?: string;

/**
 * Address
 */
'noresident_address'?: string;

/**
 * Phone / fax
 */
'noresident_phone'?: string;

/**
 * Email
 */
'noresident_email'?: string;

/**
 * Website
 */
'noresident_website'?: string;

/**
 * Full name
 */
'noresident_signatory_fio'?: string;

/**
 * Position
 */
'noresident_signatory_position'?: string;

/**
 * Bank name
 */
'noresident_bank_name'?: string;

/**
 * Bank address
 */
'noresident_bank_address'?: string;

/**
 * Account Number
 */
'noresident_bank_rs'?: string;

/**
 * Account currency
 */
'noresident_bank_currency'?: string;

/**
 * Account name
 */
'noresident_bank_rs_name'?: string;

/**
 * Swift code
 */
'noresident_bank_swift'?: string;

/**
 * Intermediary bank
 */
'noresident_bank_im'?: string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system'?: number;

/**
 * Основная валюта счетов
 */
'base_currency'?: string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;
}
  }): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Компания: обновление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyUpdate(params?: {
    body?: {

/**
 * ID
 */
'id': number;

/**
 * Наименование полное
 */
'name'?: string;

/**
 * Наименование сокращенное
 */
'name_short'?: string;

/**
 * Юридический адрес
 */
'jur_address'?: string;

/**
 * Почтовый адрес
 */
'post_address'?: string;

/**
 * ИНН
 */
'inn'?: string;

/**
 * КПП
 */
'kpp'?: string;

/**
 * ОГРН
 */
'ogrn'?: string;

/**
 * ОКПО
 */
'okpo'?: string;

/**
 * Номер телефона
 */
'phone'?: string;

/**
 * Email
 */
'email'?: string;

/**
 * Вебсайт
 */
'website'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Ф.И.О.
 */
'responsible_person_fio'?: string;

/**
 * Должность
 */
'responsible_person_position'?: string;

/**
 * Основание
 */
'responsible_person_base'?: string;

/**
 * Ф.И.О.
 */
'chief_accountant_fio'?: string;

/**
 * Наименование
 */
'bank_name'?: string;

/**
 * БИК
 */
'bank_bik'?: string;

/**
 * КПП
 */
'bank_kpp'?: string;

/**
 * Расчетный счет
 */
'bank_rs'?: string;

/**
 * Корреспондентский счет
 */
'bank_ks'?: string;

/**
 * Валюта счета
 */
'bank_currency'?: string;

/**
 * Full name
 */
'noresident_name'?: string;

/**
 * Address
 */
'noresident_address'?: string;

/**
 * Phone / fax
 */
'noresident_phone'?: string;

/**
 * Email
 */
'noresident_email'?: string;

/**
 * Website
 */
'noresident_website'?: string;

/**
 * Full name
 */
'noresident_signatory_fio'?: string;

/**
 * Position
 */
'noresident_signatory_position'?: string;

/**
 * Bank name
 */
'noresident_bank_name'?: string;

/**
 * Bank address
 */
'noresident_bank_address'?: string;

/**
 * Account Number
 */
'noresident_bank_rs'?: string;

/**
 * Account currency
 */
'noresident_bank_currency'?: string;

/**
 * Account name
 */
'noresident_bank_rs_name'?: string;

/**
 * Swift code
 */
'noresident_bank_swift'?: string;

/**
 * Intermediary bank
 */
'noresident_bank_im'?: string;

/**
 * Система налогообложения (ID берем из запроса - settings_tax)
 */
'tax_system'?: number;

/**
 * Основная валюта счетов
 */
'base_currency'?: string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Главная фирма
 */
'general'?: boolean;
}
  }): Observable<{

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation companyDelete
   */
  static readonly CompanyDeletePath = '/company_delete';

  /**
   * Компания: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDelete$Response(params?: {
    body?: {

/**
 * ID удаляемого компании
 */
'id': number;
}
  }): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Компания: удаление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDelete(params?: {
    body?: {

/**
 * ID удаляемого компании
 */
'id': number;
}
  }): Observable<{

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation companyDepartmentList
   */
  static readonly CompanyDepartmentListPath = '/company_department_list';

  /**
   * Подразделения: список.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyDepartmentList()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyDepartmentList$Response(params?: {
  }): Observable<StrictHttpResponse<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Количество должностей
 */
'count_position'?: number;

/**
 * Количество сотрудников
 */
'count_user'?: number;

/**
 * Порядок (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyDepartmentListPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * ID
         */
        'id'?: number;
        
        /**
         * Наименование
         */
        'name'?: string;
        
        /**
         * Количество должностей
         */
        'count_position'?: number;
        
        /**
         * Количество сотрудников
         */
        'count_user'?: number;
        
        /**
         * Порядок (меньше - выше)
         */
        'num'?: number;
        
        /**
         * Время создания
         */
        'time_add'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>;
      })
    );
  }

  /**
   * Подразделения: список.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyDepartmentList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyDepartmentList(params?: {
  }): Observable<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Количество должностей
 */
'count_position'?: number;

/**
 * Количество сотрудников
 */
'count_user'?: number;

/**
 * Порядок (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}> {

    return this.companyDepartmentList$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Количество должностей
 */
'count_position'?: number;

/**
 * Количество сотрудников
 */
'count_user'?: number;

/**
 * Порядок (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>) => r.body as {

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Количество должностей
 */
'count_position'?: number;

/**
 * Количество сотрудников
 */
'count_user'?: number;

/**
 * Порядок (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
})
    );
  }

  /**
   * Path part for operation companyDepartmentCreate
   */
  static readonly CompanyDepartmentCreatePath = '/company_department_create';

  /**
   * Подразделения: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyDepartmentCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentCreate$Response(params?: {
    body?: {

/**
 * Наименование
 */
'name': string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyDepartmentCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * ID созданной записи
         */
        'id': number;
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Подразделения: добавление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyDepartmentCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentCreate(params?: {
    body?: {

/**
 * Наименование
 */
'name': string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyDepartmentCreate$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation companyDepartmentUpdate
   */
  static readonly CompanyDepartmentUpdatePath = '/company_department_update';

  /**
   * Подразделения: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyDepartmentUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentUpdate$Response(params?: {
    body?: {

/**
 * ID изменяемого подразделения
 */
'id': number;

/**
 * Наименование
 */
'name': string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyDepartmentUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Подразделения: обновление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyDepartmentUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentUpdate(params?: {
    body?: {

/**
 * ID изменяемого подразделения
 */
'id': number;

/**
 * Наименование
 */
'name': string;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<{

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyDepartmentUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation companyDepartmentDelete
   */
  static readonly CompanyDepartmentDeletePath = '/company_department_delete';

  /**
   * Подразделения: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyDepartmentDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentDelete$Response(params?: {
    body?: {

/**
 * ID удаляемого подразделения
 */
'id': number;

/**
 * Удалять вместе с должностями
 */
'with_position'?: boolean;

/**
 * Удалять вместе с сотрудниками
 */
'with_staff'?: boolean;
}
  }): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyDepartmentDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Подразделения: удаление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyDepartmentDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentDelete(params?: {
    body?: {

/**
 * ID удаляемого подразделения
 */
'id': number;

/**
 * Удалять вместе с должностями
 */
'with_position'?: boolean;

/**
 * Удалять вместе с сотрудниками
 */
'with_staff'?: boolean;
}
  }): Observable<{

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyDepartmentDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation companyPositionList
   */
  static readonly CompanyPositionListPath = '/company_position_list';

  /**
   * Должности: список.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyPositionList()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyPositionList$Response(params?: {
  }): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyPositionListPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * Наименование
         */
        'name'?: string;
        
        /**
         * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
         */
        'permission'?: {
        };
        
        /**
         * Порядок для сортировки (меньше - выше)
         */
        'num'?: number;
        
        /**
         * Время создания
         */
        'time_add'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>>;
      })
    );
  }

  /**
   * Должности: список.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyPositionList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyPositionList(params?: {
  }): Observable<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {

    return this.companyPositionList$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>>) => r.body as Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>)
    );
  }

  /**
   * Path part for operation companyPositionInfo
   */
  static readonly CompanyPositionInfoPath = '/company_position_info';

  /**
   * Должности: данные.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyPositionInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyPositionInfo$Response(params: {

    /**
     * ID должности
     */
    id: number;
  }): Observable<StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyPositionInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * Наименование
         */
        'name'?: string;
        
        /**
         * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
         */
        'permission'?: {
        };
        
        /**
         * Порядок для сортировки (меньше - выше)
         */
        'num'?: number;
        
        /**
         * Время создания
         */
        'time_add'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>;
      })
    );
  }

  /**
   * Должности: данные.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyPositionInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyPositionInfo(params: {

    /**
     * ID должности
     */
    id: number;
  }): Observable<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}> {

    return this.companyPositionInfo$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>) => r.body as {

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
})
    );
  }

  /**
   * Path part for operation companyPositionCreate
   */
  static readonly CompanyPositionCreatePath = '/company_position_create';

  /**
   * Должности: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyPositionCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionCreate$Response(params?: {
    body?: {

/**
 * Наименование
 */
'name': string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyPositionCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * ID созданной записи
         */
        'id': number;
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Должности: добавление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyPositionCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionCreate(params?: {
    body?: {

/**
 * Наименование
 */
'name': string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyPositionCreate$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation companyPositionUpdate
   */
  static readonly CompanyPositionUpdatePath = '/company_position_update';

  /**
   * Должности: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyPositionUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionUpdate$Response(params?: {
    body?: {

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyPositionUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Должности: обновление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyPositionUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionUpdate(params?: {
    body?: {

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Права доступа к разделам {permission_object: {permission_rule: permission_value}} (ID берем из запроса - settings_get)
 */
'permission'?: {
};

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<{

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyPositionUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation companyPositionDelete
   */
  static readonly CompanyPositionDeletePath = '/company_position_delete';

  /**
   * Должности: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyPositionDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionDelete$Response(params?: {
    body?: {

/**
 * ID удаляемой должности
 */
'id': number;

/**
 * Удалять сотрудников с этой должностью
 */
'delete_staff'?: boolean;
}
  }): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyPositionDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Должности: удаление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyPositionDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionDelete(params?: {
    body?: {

/**
 * ID удаляемой должности
 */
'id': number;

/**
 * Удалять сотрудников с этой должностью
 */
'delete_staff'?: boolean;
}
  }): Observable<{

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyPositionDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation companyEmployeeList
   */
  static readonly CompanyEmployeeListPath = '/company_employee_list';

  /**
   * Сотрудники: список.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyEmployeeList()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyEmployeeList$Response(params?: {

    /**
     * ID подразделения
     */
    department_id?: number;

    /**
     * ID должности
     */
    position_id?: number;

    /**
     * Страница
     */
    page?: number;

    /**
     * Лимит позиций на страницу
     */
    limit?: number;
  }): Observable<StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Email
 */
'email'?: string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id'?: number;

/**
 * ID должности
 */
'position_id'?: number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyEmployeeListPath, 'get');
    if (params) {
      rb.query('department_id', params.department_id, {});
      rb.query('position_id', params.position_id, {});
      rb.query('page', params.page, {});
      rb.query('limit', params.limit, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * Email
         */
        'email'?: string;
        
        /**
         * Пароль
         */
        'password'?: string;
        
        /**
         * Доступ в систему
         */
        'access'?: boolean;
        
        /**
         * Телефон
         */
        'phone'?: string;
        
        /**
         * Skype
         */
        'skype'?: string;
        
        /**
         * Фамилия
         */
        'name_f'?: string;
        
        /**
         * Имя
         */
        'name_i'?: string;
        
        /**
         * Отчество
         */
        'name_o'?: string;
        
        /**
         * Дата рождения
         */
        'birth_date'?: string;
        
        /**
         * Дата трудоустройства
         */
        'employment_date'?: string;
        
        /**
         * Дата увольнения
         */
        'dismissal_date'?: string;
        
        /**
         * ID подразделения
         */
        'department_id'?: number;
        
        /**
         * ID должности
         */
        'position_id'?: number;
        
        /**
         * Руководитель подразделения
         */
        'department_leader'?: boolean;
        
        /**
         * Порядок для сортировки (меньше - выше)
         */
        'num'?: number;
        
        /**
         * Время создания
         */
        'time_add'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>;
      })
    );
  }

  /**
   * Сотрудники: список.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyEmployeeList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyEmployeeList(params?: {

    /**
     * ID подразделения
     */
    department_id?: number;

    /**
     * ID должности
     */
    position_id?: number;

    /**
     * Страница
     */
    page?: number;

    /**
     * Лимит позиций на страницу
     */
    limit?: number;
  }): Observable<{

/**
 * ID
 */
'id': number;

/**
 * Email
 */
'email'?: string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id'?: number;

/**
 * ID должности
 */
'position_id'?: number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}> {

    return this.companyEmployeeList$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Email
 */
'email'?: string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id'?: number;

/**
 * ID должности
 */
'position_id'?: number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>) => r.body as {

/**
 * ID
 */
'id': number;

/**
 * Email
 */
'email'?: string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id'?: number;

/**
 * ID должности
 */
'position_id'?: number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
})
    );
  }

  /**
   * Path part for operation companyEmployeeInfo
   */
  static readonly CompanyEmployeeInfoPath = '/company_employee_info';

  /**
   * Сотрудники: данные.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyEmployeeInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyEmployeeInfo$Response(params: {

    /**
     * ID сотрудника
     */
    id: number;
  }): Observable<StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Email
 */
'email'?: string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id'?: number;

/**
 * ID должности
 */
'position_id'?: number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyEmployeeInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * Email
         */
        'email'?: string;
        
        /**
         * Пароль
         */
        'password'?: string;
        
        /**
         * Доступ в систему
         */
        'access'?: boolean;
        
        /**
         * Телефон
         */
        'phone'?: string;
        
        /**
         * Skype
         */
        'skype'?: string;
        
        /**
         * Фамилия
         */
        'name_f'?: string;
        
        /**
         * Имя
         */
        'name_i'?: string;
        
        /**
         * Отчество
         */
        'name_o'?: string;
        
        /**
         * Дата рождения
         */
        'birth_date'?: string;
        
        /**
         * Дата трудоустройства
         */
        'employment_date'?: string;
        
        /**
         * Дата увольнения
         */
        'dismissal_date'?: string;
        
        /**
         * ID подразделения
         */
        'department_id'?: number;
        
        /**
         * ID должности
         */
        'position_id'?: number;
        
        /**
         * Руководитель подразделения
         */
        'department_leader'?: boolean;
        
        /**
         * Порядок для сортировки (меньше - выше)
         */
        'num'?: number;
        
        /**
         * Время создания
         */
        'time_add'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>;
      })
    );
  }

  /**
   * Сотрудники: данные.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyEmployeeInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyEmployeeInfo(params: {

    /**
     * ID сотрудника
     */
    id: number;
  }): Observable<{

/**
 * ID
 */
'id': number;

/**
 * Email
 */
'email'?: string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id'?: number;

/**
 * ID должности
 */
'position_id'?: number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}> {

    return this.companyEmployeeInfo$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Email
 */
'email'?: string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id'?: number;

/**
 * ID должности
 */
'position_id'?: number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>) => r.body as {

/**
 * ID
 */
'id': number;

/**
 * Email
 */
'email'?: string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id'?: number;

/**
 * ID должности
 */
'position_id'?: number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
})
    );
  }

  /**
   * Path part for operation companyEmployeeCreate
   */
  static readonly CompanyEmployeeCreatePath = '/company_employee_create';

  /**
   * Сотрудники: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyEmployeeCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeCreate$Response(params?: {
    body?: {

/**
 * Email
 */
'email': string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f': string;

/**
 * Имя
 */
'name_i': string;

/**
 * Отчество
 */
'name_o': string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id': number;

/**
 * ID должности
 */
'position_id': number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyEmployeeCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * ID созданной записи
         */
        'id': number;
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Сотрудники: добавление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyEmployeeCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeCreate(params?: {
    body?: {

/**
 * Email
 */
'email': string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f': string;

/**
 * Имя
 */
'name_i': string;

/**
 * Отчество
 */
'name_o': string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id': number;

/**
 * ID должности
 */
'position_id': number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyEmployeeCreate$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation companyEmployeeUpdate
   */
  static readonly CompanyEmployeeUpdatePath = '/company_employee_update';

  /**
   * Сотрудники: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyEmployeeUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeUpdate$Response(params?: {
    body?: {

/**
 * ID
 */
'id': number;

/**
 * Email
 */
'email'?: string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id'?: number;

/**
 * ID должности
 */
'position_id'?: number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyEmployeeUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Сотрудники: обновление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyEmployeeUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeUpdate(params?: {
    body?: {

/**
 * ID
 */
'id': number;

/**
 * Email
 */
'email'?: string;

/**
 * Пароль
 */
'password'?: string;

/**
 * Доступ в систему
 */
'access'?: boolean;

/**
 * Телефон
 */
'phone'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Дата рождения
 */
'birth_date'?: string;

/**
 * Дата трудоустройства
 */
'employment_date'?: string;

/**
 * Дата увольнения
 */
'dismissal_date'?: string;

/**
 * ID подразделения
 */
'department_id'?: number;

/**
 * ID должности
 */
'position_id'?: number;

/**
 * Руководитель подразделения
 */
'department_leader'?: boolean;

/**
 * Порядок для сортировки (меньше - выше)
 */
'num'?: number;
}
  }): Observable<{

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyEmployeeUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation companyEmployeeDelete
   */
  static readonly CompanyEmployeeDeletePath = '/company_employee_delete';

  /**
   * Сотрудники: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyEmployeeDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeDelete$Response(params?: {
    body?: {

/**
 * ID удаляемого сотрудника
 */
'id'?: number;
}
  }): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyEmployeeDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Сотрудники: удаление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyEmployeeDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeDelete(params?: {
    body?: {

/**
 * ID удаляемого сотрудника
 */
'id'?: number;
}
  }): Observable<{

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.companyEmployeeDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

}
