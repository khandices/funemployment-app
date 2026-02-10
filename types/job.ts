export interface Job {
    id: string;
    job_title: string;
    company_name: string;
    job_type: string;
    date_applied: Date,
    location_type: string;
    referral: boolean;
    salary?: number;
    poc?: string;
    recruiter_screen?: Date,
    interview_1?: Date,
    interview_2?: Date,
    interview_3?: Date,
    interview_4?: Date,
    rejection_date?: Date,
    offer_date?: Date,
    offer_amount?: number
    notes?: string;
}