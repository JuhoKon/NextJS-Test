define({ "api": [
  {
    "type": "get",
    "url": "/api/beacon_info:groupId:beaconId:template",
    "title": "Request User information",
    "name": "get_beaconInfo",
    "group": "Beacon_Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "beaconId",
            "description": "<p>Beacon ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "template",
            "description": "<p>Boolean if we're rendering a template (extra information)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:8080/api/beacon_info?groupId=123&beaconId=123&template=true",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "beacon",
            "description": "<p>info...</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pages/api/beacon_info.ts",
    "groupTitle": "Beacon_Info"
  }
] });
