export interface PlanInfo {
    title: string,
    yearlyCost: number,
    monthlyCost: number
} 

export interface UserInfo {
    email: string,
    fullName: string,
    phoneNumber: string
}

export interface ProcessInfo {
    user: UserInfo | null,
    selectedPlan: PlanInfo | null,
    selectedAddOn: Array<{
        title: string,
        monthlyCost: number,
        yearlyCost: number
    }> | null,
    isPlanYearly: boolean | null,
}

export interface ViewProps {
    disabled?: boolean,
    setDisabled?: (e: boolean) => void;
    processInfo: ProcessInfo | any;
    setProcessInfo: (e: any) => any
}


export interface CardProps {
  title: string;
  description?: string;
  monthlyCost: number;
  yearlyCost: number;
  isYearly: boolean;
  icon: string;
  marked: boolean;
  onClick: (e: any) => void;
}
