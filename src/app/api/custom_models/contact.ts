export interface Contact {
  id: number;
  owner_id: number;
  user_id: number;
  contractor_id: number;
  name_f: string;
  name_i: string;
  name_o: string;
  name: string;
  position: string;
  city_id: number;
  phone: string;
  mobile_phone: string;
  email: string;
  skype: string;
  telegram: string;
  whatsapp: string;
  wechat: string;
  responsible_direction: string[];
  responsible_param: any;
  time_add: string;
  time_edit: string;
  city_name: string;
}

export type ContactStatus = 'old' | 'new' | 'removed' | 'never';

export interface ContactWithStatus {
  status: ContactStatus,
  contact: Partial<Contact>
};

export type ContactList = ContactWithStatus[];

