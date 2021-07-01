___TERMS_OF_SERVICE___

By creating or modifying this file you agree to Google Tag Manager's Community
Template Gallery Developer Terms of Service available at
https://developers.google.com/tag-manager/gallery-tos (or such other URL as
Google may provide), as modified from time to time.


___INFO___

{
  "type": "TAG",
  "id": "cvt_temp_public_id",
  "version": 1,
  "securityGroups": [],
  "displayName": "pushninja",
  "brand": {
    "id": "brand_dummy",
    "displayName": "",
    "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABCFBMVEUAAAAAAP9VVf8rgNUkbdsggN85ceMzgOYudOgrgOopeuAngOIugOQrd+Ype+YufOgreOMpfOMufOUteeYtfeMteecrfOQteucseuQsfOQrfOUte+Ute+QseuQse+UreuUre+Ure+QteuQtfOUreuYte+YtfOQse+Qre+UrfOUte+QteuUte+Yre+Ute+YsfOQre+Ure+YreuYre+Qte+Ute+YsfOYsfOQse+Yse+Use+Use+Yre+Qse+Use+Use+UseuQse+Use+Use+Use+Use+Use+Use+UteuUse+Yse+Use+Use+Use+Use+Use+Use+Use+Use+Use+Use+Yse+Use+X///8y/OYWAAAAVnRSTlMAAQMGBwgJCgsYGRocHh8hJCUnKC0/QklLTE5PVVZXWFlfYGFkZmdoamtyd3iBg4aHjY6ZmqCho6qus7W2ubrHysvM2Nvg4uTl5uvs7fLz9Pb3+Pn6/s7+4qMAAAABYktHRFd9CtkfAAABAklEQVQYGb3BaTcCUQAG4HfKVLaUabEkxFiyLyHCjMJUI9W47///KTqnjHunxjl98TyYTiSTz2ciCJO8bnOgfbWIiQ77ZKNWa5C9fUxwSnGzjAHjVvAEYzbpFTGy9SUKCIg73IPvgO8xqEw+a/BpFneheuA2JDu8h+qNSUiW+AqF5okoJFHhaZAl2IGiwwRkc3SgaHIWMoN1KOo0IFvlIxRPXIHsmBdQXPIIsipLUJRYhWTmQyxAMS8+dfzaoI0Am0X4tBeaCDBpa/hhsqkjQHdoYiTbZaUwpsJuFkMthmhhqHwXooz/l3LPgHM3hTDpPi2LvTRCrbuku4Y/xHO5GKbzDRUBNgZtRihdAAAAAElFTkSuQmCC"
  },
  "description": "Here it is used to send a notification",
  "containerContexts": [
    "WEB"
  ]
}


___TEMPLATE_PARAMETERS___

[
  {
    "type": "TEXT",
    "name": "api_key",
    "displayName": "Api_key",
    "simpleValueType": true
  }
]


___SANDBOXED_JS_FOR_WEB_TEMPLATE___

// Enter your template code here.
const log = require('logToConsole');
log('data = verify', data);

// Call data.gtmOnSuccess when the tag is finished.
data.gtmOnSuccess();


___WEB_PERMISSIONS___

[
  {
    "instance": {
      "key": {
        "publicId": "logging",
        "versionId": "1"
      },
      "param": [
        {
          "key": "environments",
          "value": {
            "type": 1,
            "string": "debug"
          }
        }
      ]
    },
    "isRequired": true
  }
]


___TESTS___

scenarios:
- name: verify script
  code: |-
    const mockData = {
      // Mocked field values
    };

    // Call runCode to run the template's code.
    runCode(mockData);

    // Verify that the tag finished successfully.
    assertApi('gtmOnSuccess').wasCalled();


___NOTES___

Created on 7/1/2021, 7:42:14 PM


