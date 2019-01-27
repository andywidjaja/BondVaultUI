import { InMemoryDbService } from "angular-in-memory-web-api";
import { IAssetType } from "./assetType";
import { ICouponType } from "./couponType";
import { IBond } from "./bond";

export class BondData implements InMemoryDbService {
    createDb() {
        const assetTypes: IAssetType[] = [
            {'id': 1, 'assetType': 'AGYCMOARM'},
            {'id': 2, 'assetType': 'AGYCMOFIXED'},
            {'id': 3, 'assetType': 'AGYMBSARM'},
            {'id': 4, 'assetType': 'AGYMBSFIXED'},
            {'id': 5, 'assetType': 'DUS'},
            {'id': 6, 'assetType': 'HECMARM'},
            {'id': 7, 'assetType': 'HECMCMO'},
            {'id': 8, 'assetType': 'HECMFIXED'},
            {'id': 9, 'assetType': 'KFRED'},
            {'id': 10, 'assetType': 'MUNIBE'},
            {'id': 11, 'assetType': 'MUNIBQ'},
            {'id': 12, 'assetType': 'MUNIGM'},
            {'id': 13, 'assetType': 'MUNITAX'},
            {'id': 14, 'assetType': 'PLMBS'},
            {'id': 15, 'assetType': 'SBAARM'},
            {'id': 16, 'assetType': 'USAGCY'},
            {'id': 17, 'assetType': 'USCORP'},
            {'id': 18, 'assetType': 'USGOVT'}
        ];

        const bonds: IBond[] = [
            {
                "id":1,
                "cusip":"005176JN3",
                "assetType":"MUNIGM",
                "issuerIndustry":"SCD",
                "mortgageAmortizationTypeLevel":null,
                "mortgageType":"",
                "mortgagePrepayType":"",
                "securityType":"FIXED",
                "securityType2":"",
                "couponType":"FIXED",
                "marketSectorDescription":"Muni",
                "mortgageCollateralType":"",
                "taxCode":"EXMP",
                "bankQualified": false,
                "datedDate": new Date(2016, 9, 21),
                "capitalPurpose":"REF"
            },
            {
                "id":2,
                "cusip":"005518VJ1",
                "assetType":"MUNIGM",
                "issuerIndustry":"SCD",
                "mortgageAmortizationTypeLevel":null,
                "mortgageType":"",
                "mortgagePrepayType":"",
                "securityType":"FIXED",
                "securityType2":"",
                "couponType":"FIXED",
                "marketSectorDescription":"Muni",
                "mortgageCollateralType":"",
                "taxCode":"EXMP",
                "bankQualified": false,
                "datedDate": new Date(2015, 12, 17),
                "capitalPurpose":"NEW"
            },
            {
                "id":3,
                "cusip":"035681DR3",
                "assetType":"MUNIGM",
                "issuerIndustry":"SCD",
                "mortgageAmortizationTypeLevel":null,
                "mortgageType":"",
                "mortgagePrepayType":"",
                "securityType":"FIXED",
                "securityType2":"",
                "couponType":"FIXED",
                "marketSectorDescription":"Muni",
                "mortgageCollateralType":"",
                "taxCode":"EXMP",
                "bankQualified": false,
                "datedDate": new Date(2016, 8, 18),
                "capitalPurpose":"NEW"
            }
        ];

        const couponTypes: ICouponType[] = [
            {'id': 1, 'couponType': 'ADJ CONV. TO FIXED'},
            {'id': 2, 'couponType': 'ADJUSTABLE'},
            {'id': 3, 'couponType': 'ADJUSTABLE, OID'},
            {'id': 4, 'couponType': 'FIXED'},
            {'id': 5, 'couponType': 'FIXED, OID'},
            {'id': 6, 'couponType': 'FLOATING'},
            {'id': 7, 'couponType': 'INTER. APPRECIATION'},
            {'id': 8, 'couponType': 'INTER. APPRECIATION, OID'},
            {'id': 9, 'couponType': 'STEP'},
            {'id': 10, 'couponType': 'STEP CPN'},
            {'id': 11, 'couponType': 'VARIABLE'},
            {'id': 12, 'couponType': 'ZERO'},
            {'id': 13, 'couponType': 'ZERO COUPON'},
            {'id': 14, 'couponType': 'ZERO COUPON, OID'}
        ];

        return {
            assetTypes: assetTypes,
            bonds: bonds,
            couponTypes: couponTypes
        };
    }
}