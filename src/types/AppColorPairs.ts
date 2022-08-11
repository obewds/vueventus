// ./src/types/AppColorPairs.ts

import type { AppColor } from './AppColor'
import type { GroundTextColors } from './GroundTextColors'

export interface AppColorPairs {
    [key: string|number]: GroundTextColors | AppColorPairs | AppColor
}
