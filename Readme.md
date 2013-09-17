
# exif

  EXIF extraction with exiftool.

  __NOTE__: use https://github.com/LearnBoost/node-libexif if compiling is not a problem,
  it uses native bindings and is __much__ faster.

## Installation

    $ npm install exif2

### Example

```js
var exif = require('exif');

exif(file, function(err, obj){
  console.log(obj);
})
```

```json
{
  "exiftool version number": "9.08",
  "file name": "forest.jpeg",
  "directory": "test/fixtures",
  "file size": "497 kB",
  "file modification date time": "2012:12:11 14:45:59-08:00",
  "file access date time": "2012:12:13 16:18:36-08:00",
  "file inode change date time": "2012:12:11 14:45:59-08:00",
  "file permissions": "rw-------",
  "file type": "JPEG",
  "mime type": "image/jpeg",
  "jfif version": "1.01",
  "exif byte order": "Big-endian (Motorola, MM)",
  "photometric interpretation": "Color Filter Array",
  "make": "NIKON CORPORATION",
  "camera model name": "NIKON D7000",
  "orientation": "Horizontal (normal)",
  "x resolution": "72",
  "y resolution": "72",
  "resolution unit": "inches",
  "software": "Pixelmator 2.1.1",
  "modify date": "2012:10:08 19:10:63.50",
  "exposure time": "1/80",
  "f number": "5.6",
  "exposure program": "Aperture-priority AE",
  "iso": "500",
  "date time original": "2012:10:07 11:36:30.50",
  "create date": "2012:10:07 11:36:30.50",
  "exposure compensation": "-2",
  "max aperture value": "4.0",
  "metering mode": "Multi-segment",
  "light source": "Unknown",
  "flash": "Off, Did not fire",
  "focal length": "10.0 mm (35 mm equivalent: 15.0 mm)",
  "sub sec time": "50",
  "sub sec time original": "50",
  "sub sec time digitized": "50",
  "color space": "sRGB",
  "exif image width": "1971",
  "exif image height": "1306",
  "sensing method": "One-chip color area",
  "custom rendered": "Normal",
  "exposure mode": "Auto",
  "white balance": "Auto",
  "digital zoom ratio": "1",
  "focal length in 35mm format": "15 mm",
  "scene capture type": "Standard",
  "gain control": "Low gain up",
  "contrast": "Normal",
  "saturation": "Normal",
  "sharpness": "Normal",
  "subject distance range": "Unknown",
  "profile cmm type": "Lino",
  "profile version": "2.1.0",
  "profile class": "Display Device Profile",
  "color space data": "RGB",
  "profile connection space": "XYZ",
  "profile date time": "1998:02:09 06:49:00",
  "profile file signature": "acsp",
  "primary platform": "Microsoft Corporation",
  "cmm flags": "Not Embedded, Independent",
  "device manufacturer": "IEC",
  "device model": "sRGB",
  "device attributes": "Reflective, Glossy, Positive, Color",
  "rendering intent": "Perceptual",
  "connection space illuminant": "0.9642 1 0.82491",
  "profile creator": "HP",
  "profile id": "0",
  "profile copyright": "Copyright (c) 1998 Hewlett-Packard Company",
  "profile description": "sRGB IEC61966-2.1",
  "media white point": "0.95045 1 1.08905",
  "media black point": "0 0 0",
  "red matrix column": "0.43607 0.22249 0.01392",
  "green matrix column": "0.38515 0.71687 0.09708",
  "blue matrix column": "0.14307 0.06061 0.7141",
  "device mfg desc": "IEC http://www.iec.ch",
  "device model desc": "IEC 61966-2.1 Default RGB colour space - sRGB",
  "viewing cond desc": "Reference Viewing Condition in IEC61966-2.1",
  "viewing cond illuminant": "19.6445 20.3718 16.8089",
  "viewing cond surround": "3.92889 4.07439 3.36179",
  "viewing cond illuminant type": "D50",
  "luminance": "76.03647 80 87.12462",
  "measurement observer": "CIE 1931",
  "measurement backing": "0 0 0",
  "measurement geometry": "Unknown (0)",
  "measurement flare": "0.999%",
  "measurement illuminant": "D65",
  "technology": "Cathode Ray Tube Display",
  "red tone reproduction curve": "(Binary data 2060 bytes, use -b option to extract)",
  "green tone reproduction curve": "(Binary data 2060 bytes, use -b option to extract)",
  "blue tone reproduction curve": "(Binary data 2060 bytes, use -b option to extract)",
  "xmp toolkit": "XMP Core 4.4.0",
  "serial number": "5044750",
  "lens": "Sigma 10-20mm F4-5.6 EX DC HSM",
  "image number": "6069",
  "flash compensation": "0",
  "image width": "900",
  "image height": "596",
  "encoding process": "Baseline DCT, Huffman coding",
  "bits per sample": "8",
  "color components": "3",
  "y cb cr sub sampling": "YCbCr4:4:4 (1 1)",
  "aperture": "5.6",
  "image size": "900x596",
  "scale factor to 35 mm equivalent": "1.5",
  "shutter speed": "1/80",
  "circle of confusion": "0.020 mm",
  "field of view": "100.4 deg",
  "hyperfocal distance": "0.89 m",
  "lens id": "Unknown (809257734)",
  "light value": "9.0"
}
```

## License 

  MIT
