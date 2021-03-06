/**
 * Copyright (c) 2020 INESC TEC <https://www.inesctec.pt>
 *
 * This Source Code Form is subject to the terms of the European Union
 * Public License, v. 1.2. If a copy of the EUPL was not distributed with
 * this file, You can obtain one at https://opensource.org/licenses/EUPL-1.2.
 *
 * SPDX-License-Identifier: EUPL-1.2
 */

import { Platform } from 'react-native';

export default {
  ...Platform.select({
    android: {
      light: 'normal',
      normal: 'normal',
      semibold: 'bold',
      bold: 'bold',
    },
    ios: {
      light: '200',
      normal: '400',
      semibold: '600',
      bold: '700',
    },
  }),
};
