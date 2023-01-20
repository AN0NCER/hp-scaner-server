# HP printer | Scanner | Hacking
Scan documents from an HP printer with wifi access

Basic requests:

`http://192.168.31.187/eSCL/ScannerCapabilities`

`http://192.168.31.187/DevMgmt/ProductStatusDyn.xml`

`http://192.168.31.187/eSCL/ScannerStatus`

`http://192.168.31.187/eSCL/ScanJobs` - POST

```xml
<escl:ScanSettings xmlns:escl="http://schemas.hp.com/imaging/escl/2011/05/03" xmlns:pwg="http://www.pwg.org/schemas/2010/12/sm" xmlns:scan="http://schemas.hp.com/imaging/escl/2011/05/03">
  <pwg:Version>2.63</pwg:Version>
  <pwg:ScanRegions>
    <pwg:ScanRegion>
      <pwg:Height>3507</pwg:Height>
      <pwg:ContentRegionUnits>escl:ThreeHundredthsOfInches</pwg:ContentRegionUnits>
      <pwg:Width>2481</pwg:Width>
      <pwg:XOffset>0</pwg:XOffset>
      <pwg:YOffset>0</pwg:YOffset>
    </pwg:ScanRegion>
  </pwg:ScanRegions>
  <pwg:DocumentFormat>image/jpeg</pwg:DocumentFormat>
  <pwg:InputSource>Platen</pwg:InputSource>
  <escl:XResolution>200</escl:XResolution>
  <escl:YResolution>200</escl:YResolution>
  <escl:ColorMode>RGB24</escl:ColorMode>
  <escl:Duplex>false</escl:Duplex>
</escl:ScanSettings>

```

`http://192.168.31.187/eSCL/ScanJobs/f2nt7zvf-k59q-yk0h-1007-1odl0dbx/NextDocument`
