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
 * Запросы
 */
@Injectable({
  providedIn: 'root',
})
export class RequestService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation requestStatus
   */
  static readonly RequestStatusPath = '/request_status';

  /**
   * Статусы запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestStatus$Response(params?: {
  }): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, RequestService.RequestStatusPath, 'get');
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
        'id'?: number;
        
        /**
         * Наименование
         */
        'name'?: string;
        }>>;
      })
    );
  }

  /**
   * Статусы запроса.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `requestStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestStatus(params?: {
  }): Observable<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>> {

    return this.requestStatus$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>) => r.body as Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>)
    );
  }

  /**
   * Path part for operation requestStatusCrm
   */
  static readonly RequestStatusCrmPath = '/request_status_crm';

  /**
   * Статусы CRM.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestStatusCrm()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestStatusCrm$Response(params?: {
  }): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, RequestService.RequestStatusCrmPath, 'get');
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
        'id'?: number;
        
        /**
         * Наименование
         */
        'name'?: string;
        }>>;
      })
    );
  }

  /**
   * Статусы CRM.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `requestStatusCrm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestStatusCrm(params?: {
  }): Observable<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>> {

    return this.requestStatusCrm$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>) => r.body as Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>)
    );
  }

  /**
   * Path part for operation requestIncoterms
   */
  static readonly RequestIncotermsPath = '/request_incoterms';

  /**
   * Условия поставки (Incoterms).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestIncoterms()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestIncoterms$Response(params?: {
  }): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, RequestService.RequestIncotermsPath, 'get');
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
        'id'?: number;
        
        /**
         * Наименование
         */
        'name'?: string;
        }>>;
      })
    );
  }

  /**
   * Условия поставки (Incoterms).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `requestIncoterms$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestIncoterms(params?: {
  }): Observable<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>> {

    return this.requestIncoterms$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>) => r.body as Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>)
    );
  }

  /**
   * Path part for operation requestCreate
   */
  static readonly RequestCreatePath = '/request_create';

  /**
   * Запросы: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestCreate$Response(params?: {
    body?: {

/**
 * Ответственный (ID берем из запроса - company_employee_list)
 */
'manager_id'?: number;

/**
 * Контрагент (ID берем из запроса - customer_list)
 */
'customer_id': number;

/**
 * Вид перевозки (ID берем из запроса - transport_kind)
 */
'transport_kind_id': number;

/**
 * Тип транспорта (ID берем из запроса - transport_type)
 */
'transport_type_id': number;

/**
 * Тип кузова (ID берем из запроса - transport_body)
 */
'transport_body_id': number;

/**
 * Способ загрузки (ID берем из запроса - transport_loading)
 */
'transport_loading_id': number;

/**
 * Кол-во транспорта
 */
'transport_quantity'?: number;

/**
 * Наименование
 */
'cargo_description': number;

/**
 * Грузовые места
 */
'cargo_places': Array<{

/**
 * Количество мест
 */
'count'?: number;

/**
 * Ширина, см
 */
'width'?: number;

/**
 * Высота, см
 */
'height'?: number;

/**
 * Длина, см
 */
'length'?: number;

/**
 * Вес, кг
 */
'weight'?: number;

/**
 * Признак возможности штабелировать груз (ID берем из запроса - cargo_package)
 */
'stacking'?: boolean;

/**
 * Вид упаковки (ID берем из запроса - cargo_package)
 */
'cargo_package_id'?: number;
}>;

/**
 * Стоимость груза
 */
'cost'?: number;

/**
 * Валюта по стоимости груза (ID берем из запроса - settings_get из поля currency)
 */
'currency_id'?: number;

/**
 * Тип груза (ID берем из запроса - cargo_type)
 */
'cargo_type_id': number;

/**
 * Температурный режим
 */
'temp_control': string;

/**
 * Наличие батареек, элементов питания или жидкосте
 */
'danger'?: boolean;

/**
 * Откуда – Страна (ID берем из запроса - direction_country_list)
 */
'departure_country_id': number;

/**
 * Откуда – Город (ID берем из запроса - direction_city_list)
 */
'departure_city_id': number;

/**
 * Откуда – Аэропорт/порт/станция (ID берем из запроса - direction_point_list)
 */
'departure_point_id': number;

/**
 * Откуда – Адрес забора груза
 */
'departure_address': string;

/**
 * Куда – Страна (ID берем из запроса - direction_country_list)
 */
'arrival_country_id': number;

/**
 * Куда – Город (ID берем из запроса - direction_city_list)
 */
'arrival_city_id': number;

/**
 * Куда – Аэропорт/порт/станция (ID берем из запроса - direction_point_list)
 */
'arrival_point_id': number;

/**
 * Куда – Адрес доставки груза
 */
'arrival_address': string;

/**
 * Пункты пересечения границы (ID берем из запроса - direction_border_list)
 */
'border_id': number;

/**
 * Пункты пересечения границы
 */
'transit'?: string;

/**
 * Условия поставки по Инкотермс (ID берем из запроса - request_incoterms)
 */
'incoterms_id'?: number;

/**
 * Условия поставки - место
 */
'incoterms_place'?: string;

/**
 * Услуги отличающиеся от стандартных условий поставки
 */
'custom_service'?: {
};

/**
 * Дополнительные услуги
 */
'custom_service_optional'?: {
};

/**
 * Примечание по Запросу
 */
'comment'?: string;
}
  }): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, RequestService.RequestCreatePath, 'post');
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
   * Запросы: добавление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `requestCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestCreate(params?: {
    body?: {

/**
 * Ответственный (ID берем из запроса - company_employee_list)
 */
'manager_id'?: number;

/**
 * Контрагент (ID берем из запроса - customer_list)
 */
'customer_id': number;

/**
 * Вид перевозки (ID берем из запроса - transport_kind)
 */
'transport_kind_id': number;

/**
 * Тип транспорта (ID берем из запроса - transport_type)
 */
'transport_type_id': number;

/**
 * Тип кузова (ID берем из запроса - transport_body)
 */
'transport_body_id': number;

/**
 * Способ загрузки (ID берем из запроса - transport_loading)
 */
'transport_loading_id': number;

/**
 * Кол-во транспорта
 */
'transport_quantity'?: number;

/**
 * Наименование
 */
'cargo_description': number;

/**
 * Грузовые места
 */
'cargo_places': Array<{

/**
 * Количество мест
 */
'count'?: number;

/**
 * Ширина, см
 */
'width'?: number;

/**
 * Высота, см
 */
'height'?: number;

/**
 * Длина, см
 */
'length'?: number;

/**
 * Вес, кг
 */
'weight'?: number;

/**
 * Признак возможности штабелировать груз (ID берем из запроса - cargo_package)
 */
'stacking'?: boolean;

/**
 * Вид упаковки (ID берем из запроса - cargo_package)
 */
'cargo_package_id'?: number;
}>;

/**
 * Стоимость груза
 */
'cost'?: number;

/**
 * Валюта по стоимости груза (ID берем из запроса - settings_get из поля currency)
 */
'currency_id'?: number;

/**
 * Тип груза (ID берем из запроса - cargo_type)
 */
'cargo_type_id': number;

/**
 * Температурный режим
 */
'temp_control': string;

/**
 * Наличие батареек, элементов питания или жидкосте
 */
'danger'?: boolean;

/**
 * Откуда – Страна (ID берем из запроса - direction_country_list)
 */
'departure_country_id': number;

/**
 * Откуда – Город (ID берем из запроса - direction_city_list)
 */
'departure_city_id': number;

/**
 * Откуда – Аэропорт/порт/станция (ID берем из запроса - direction_point_list)
 */
'departure_point_id': number;

/**
 * Откуда – Адрес забора груза
 */
'departure_address': string;

/**
 * Куда – Страна (ID берем из запроса - direction_country_list)
 */
'arrival_country_id': number;

/**
 * Куда – Город (ID берем из запроса - direction_city_list)
 */
'arrival_city_id': number;

/**
 * Куда – Аэропорт/порт/станция (ID берем из запроса - direction_point_list)
 */
'arrival_point_id': number;

/**
 * Куда – Адрес доставки груза
 */
'arrival_address': string;

/**
 * Пункты пересечения границы (ID берем из запроса - direction_border_list)
 */
'border_id': number;

/**
 * Пункты пересечения границы
 */
'transit'?: string;

/**
 * Условия поставки по Инкотермс (ID берем из запроса - request_incoterms)
 */
'incoterms_id'?: number;

/**
 * Условия поставки - место
 */
'incoterms_place'?: string;

/**
 * Услуги отличающиеся от стандартных условий поставки
 */
'custom_service'?: {
};

/**
 * Дополнительные услуги
 */
'custom_service_optional'?: {
};

/**
 * Примечание по Запросу
 */
'comment'?: string;
}
  }): Observable<{

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.requestCreate$Response(params).pipe(
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
   * Path part for operation requestUpdate
   */
  static readonly RequestUpdatePath = '/request_update';

  /**
   * Запросы: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestUpdate$Response(params?: {
    body?: {

/**
 * ID запроса
 */
'id': number;

/**
 * Ответственный (ID берем из запроса - company_employee_list)
 */
'manager_id'?: number;

/**
 * Контрагент (ID берем из запроса - customer_list)
 */
'customer_id'?: number;

/**
 * Вид перевозки (ID берем из запроса - transport_kind)
 */
'transport_kind_id'?: number;

/**
 * Тип транспорта (ID берем из запроса - transport_type)
 */
'transport_type_id'?: number;

/**
 * Тип кузова (ID берем из запроса - transport_body)
 */
'transport_body_id'?: number;

/**
 * Способ загрузки (ID берем из запроса - transport_loading)
 */
'transport_loading_id'?: number;

/**
 * Кол-во транспорта
 */
'transport_quantity'?: number;

/**
 * Наименование
 */
'cargo_description'?: number;

/**
 * Грузовые места
 */
'cargo_places'?: Array<{

/**
 * Количество мест
 */
'count'?: number;

/**
 * Ширина, см
 */
'width'?: number;

/**
 * Высота, см
 */
'height'?: number;

/**
 * Длина, см
 */
'length'?: number;

/**
 * Вес, кг
 */
'weight'?: number;

/**
 * Признак возможности штабелировать груз (ID берем из запроса - cargo_package)
 */
'stacking'?: boolean;

/**
 * Вид упаковки (ID берем из запроса - cargo_package)
 */
'cargo_package_id'?: number;
}>;

/**
 * Стоимость груза
 */
'cost'?: number;

/**
 * Валюта по стоимости груза (ID берем из запроса - settings_get из поля currency)
 */
'currency_id'?: number;

/**
 * Тип груза (ID берем из запроса - cargo_type)
 */
'cargo_type_id'?: number;

/**
 * Температурный режим
 */
'temp_control'?: string;

/**
 * Наличие батареек, элементов питания или жидкосте
 */
'danger'?: boolean;

/**
 * Откуда – Страна (ID берем из запроса - direction_country_list)
 */
'departure_country_id'?: number;

/**
 * Откуда – Город (ID берем из запроса - direction_city_list)
 */
'departure_city_id'?: number;

/**
 * Откуда – Аэропорт/порт/станция (ID берем из запроса - direction_point_list)
 */
'departure_point_id'?: number;

/**
 * Откуда – Адрес забора груза
 */
'departure_address'?: string;

/**
 * Куда – Страна (ID берем из запроса - direction_country_list)
 */
'arrival_country_id'?: number;

/**
 * Куда – Город (ID берем из запроса - direction_city_list)
 */
'arrival_city_id'?: number;

/**
 * Куда – Аэропорт/порт/станция (ID берем из запроса - direction_point_list)
 */
'arrival_point_id'?: number;

/**
 * Куда – Адрес доставки груза
 */
'arrival_address'?: string;

/**
 * Пункты пересечения границы (ID берем из запроса - direction_border_list)
 */
'border_id'?: number;

/**
 * Пункты пересечения границы
 */
'transit'?: string;

/**
 * Условия поставки по Инкотермс (ID берем из запроса - request_incoterms)
 */
'incoterms_id'?: number;

/**
 * Условия поставки - место
 */
'incoterms_place'?: string;

/**
 * Услуги отличающиеся от стандартных условий поставки
 */
'custom_service'?: {
};

/**
 * Дополнительные услуги
 */
'custom_service_optional'?: {
};

/**
 * Примечание по Запросу
 */
'comment'?: string;

/**
 * Статус Запроса (ID берем из запроса - request_status)
 */
'status_id'?: number;

/**
 * Статус CRM (ID берем из запроса - request_status_crm)
 */
'status_crm_id'?: number;
}
  }): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, RequestService.RequestUpdatePath, 'post');
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
   * Запросы: обновление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `requestUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestUpdate(params?: {
    body?: {

/**
 * ID запроса
 */
'id': number;

/**
 * Ответственный (ID берем из запроса - company_employee_list)
 */
'manager_id'?: number;

/**
 * Контрагент (ID берем из запроса - customer_list)
 */
'customer_id'?: number;

/**
 * Вид перевозки (ID берем из запроса - transport_kind)
 */
'transport_kind_id'?: number;

/**
 * Тип транспорта (ID берем из запроса - transport_type)
 */
'transport_type_id'?: number;

/**
 * Тип кузова (ID берем из запроса - transport_body)
 */
'transport_body_id'?: number;

/**
 * Способ загрузки (ID берем из запроса - transport_loading)
 */
'transport_loading_id'?: number;

/**
 * Кол-во транспорта
 */
'transport_quantity'?: number;

/**
 * Наименование
 */
'cargo_description'?: number;

/**
 * Грузовые места
 */
'cargo_places'?: Array<{

/**
 * Количество мест
 */
'count'?: number;

/**
 * Ширина, см
 */
'width'?: number;

/**
 * Высота, см
 */
'height'?: number;

/**
 * Длина, см
 */
'length'?: number;

/**
 * Вес, кг
 */
'weight'?: number;

/**
 * Признак возможности штабелировать груз (ID берем из запроса - cargo_package)
 */
'stacking'?: boolean;

/**
 * Вид упаковки (ID берем из запроса - cargo_package)
 */
'cargo_package_id'?: number;
}>;

/**
 * Стоимость груза
 */
'cost'?: number;

/**
 * Валюта по стоимости груза (ID берем из запроса - settings_get из поля currency)
 */
'currency_id'?: number;

/**
 * Тип груза (ID берем из запроса - cargo_type)
 */
'cargo_type_id'?: number;

/**
 * Температурный режим
 */
'temp_control'?: string;

/**
 * Наличие батареек, элементов питания или жидкосте
 */
'danger'?: boolean;

/**
 * Откуда – Страна (ID берем из запроса - direction_country_list)
 */
'departure_country_id'?: number;

/**
 * Откуда – Город (ID берем из запроса - direction_city_list)
 */
'departure_city_id'?: number;

/**
 * Откуда – Аэропорт/порт/станция (ID берем из запроса - direction_point_list)
 */
'departure_point_id'?: number;

/**
 * Откуда – Адрес забора груза
 */
'departure_address'?: string;

/**
 * Куда – Страна (ID берем из запроса - direction_country_list)
 */
'arrival_country_id'?: number;

/**
 * Куда – Город (ID берем из запроса - direction_city_list)
 */
'arrival_city_id'?: number;

/**
 * Куда – Аэропорт/порт/станция (ID берем из запроса - direction_point_list)
 */
'arrival_point_id'?: number;

/**
 * Куда – Адрес доставки груза
 */
'arrival_address'?: string;

/**
 * Пункты пересечения границы (ID берем из запроса - direction_border_list)
 */
'border_id'?: number;

/**
 * Пункты пересечения границы
 */
'transit'?: string;

/**
 * Условия поставки по Инкотермс (ID берем из запроса - request_incoterms)
 */
'incoterms_id'?: number;

/**
 * Условия поставки - место
 */
'incoterms_place'?: string;

/**
 * Услуги отличающиеся от стандартных условий поставки
 */
'custom_service'?: {
};

/**
 * Дополнительные услуги
 */
'custom_service_optional'?: {
};

/**
 * Примечание по Запросу
 */
'comment'?: string;

/**
 * Статус Запроса (ID берем из запроса - request_status)
 */
'status_id'?: number;

/**
 * Статус CRM (ID берем из запроса - request_status_crm)
 */
'status_crm_id'?: number;
}
  }): Observable<{

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.requestUpdate$Response(params).pipe(
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
