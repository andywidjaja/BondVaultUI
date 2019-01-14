export interface IBond {
    id: number;

    cusip: string;

    assetType: string;

    issuerIndustry: string;

    mortgageAmortizationTypeLevel: number;

    mortgageType: string;

    mortgagePrepayType: string;

    securityType: string;

    securityType2: string;

    couponType: string;

    marketSectorDescription: string;

    mortgageCollateralType: string;

    taxCode: string;

    bankQualified: boolean;

    datedDate: Date;

    capitalPurpose: string;
}