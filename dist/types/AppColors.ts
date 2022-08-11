// ./src/types/AppColors.ts

import type { AppColor } from './AppColor'

export interface AppColors {
    [key: string|number]: AppColor | Record<string, string>
}
