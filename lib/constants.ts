/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://adaloversconf.es';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'adalovedev';
export const BRAND_NAME = 'AdaLoversConf';
export const YEAR = '2021';
export const SITE_NAME_MULTILINE = ['AdaLoversConf', 'Conf'];
export const SITE_NAME = 'AdaLoversConf';
export const META_DESCRIPTION =
  'Web del evento con toda la información del mismo. Aquí puedes ver horarios, charlas y conocer a las ponentes con las que contaremos.';
export const SITE_DESCRIPTION =
  'AdaLoversConf21 evento online, visibilizando a mujeres del sector de desarrollo de software.';
export const DATE = 'Septiembre 24, 2021';
export const SHORT_DATE = 'Sep 24 - 5:00pm GMT+1';
export const FULL_DATE = 'Sep 24th 5pm (GMT+1)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';
export const EVENT_FORMAT = 'Online';

export const CODE_OF_CONDUCT =
  'https://creative-glasses-5eb.notion.site/C-digo-de-conducta-d99cf9bc2b294b088856d8125821f1b6';
export const REPO = 'https://github.com/adalover/2021-adaloversconf';
export const URL_STREAM = 'https://www.youtube.com/embed/Fz2RdjA8-Uc'; // TODO: Change to correctly url stream

export const NAVIGATION = [
  // {
  //   name: 'Colaboración',
  //   route: '/collaboration'
  // }
  // {
  //   name: 'Horarios',
  //   route: '/schedule'
  // },
  // {
  //   name: 'Ponentes',
  //   route: '/speakers'
  // },
  // {
  //   name: 'Sponsors',
  //   route: '/expo'
  // }
// TODO: uncomment on the week of event
//  {
//    name: 'En directo',
//    route: '/stage/charlas'
//  }
];

export const SAMPLE_TICKET_NUMBER = 1234;
// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;


export type TicketGenerationState = 'default' | 'loading';
