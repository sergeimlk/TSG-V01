export default {
data:[
{
type:'title',
data:'ERROR 230 – TECAR 5V UNDER VOLTAGE',
},
{
type:'title',
data:'Description',
},
{
type:'text',
data:'A pop-up "ERROR: 5V UNDER VOLTAGE TECAR *” appeared on the screen (* = voltage value).',
},
{
type:'title',
data:'Analysis',
},
{
type:'list',
indentation:'18',
data:'1. Switch OFF and ON the device by the rear button.',
},
{
type:'list',
indentation:'18',
data:'2. Even if the device is switched off and on, the error will occur again.',
},
{
type:'list',
indentation:'18',
data:'3. The device is unusable, and the problem can’t be fixed remotely.',
},
{
type:'list',
indentation:'18',
data:'4. The device must be sent to WINBACK after-sales service.',
},
{
type:'title',
data:'Repair',
},
{
type:'text',
data:'A supply component must be replaced.',
},
{
type:'list',
indentation:'18',
data:'1. Open the device. Unscrew the 4 screws with a 25mm TORX type screwdriver or a cruciform screwdriver.',
},
{
type:'image',
data:'image1',
},
{
type:'list',
indentation:'18',
data:'2. Switch ON the device.',
},
{
type:'list',
indentation:'18',
data:'3. Check voltage between TP3 and TP9 on the TECAR board:',
},
{
type:'image',
data:'image2',
},
{
type:'list',
indentation:'18',
data:'4. If voltage is lower than 4.5V:',
},
{
type:'list',
indentation:'39.6',
data:'4.1. Check components:',
},
{
type:'list',
indentation:'108',
data:'• Resistances R223, R36, R37',
},
{
type:'list',
indentation:'108',
data:'• Capacitors C171, C26, C27, C28, C29, C30',
},
{
type:'list',
indentation:'108',
data:'• Inductor L35',
},
{
type:'list',
indentation:'39.6',
data:'4.2. If components are OK, replace the component TPS562201(VR7) or change the Tecar board.',
},
{
type:'image',
data:'image3',
},
{
type:'list',
indentation:'18',
data:'5. If voltage is higher than 4.5V:',
},
{
type:'list',
indentation:'39.6',
data:'5.1. Check components:',
},
{
type:'list',
indentation:'108',
data:'• Resistances R95, R96',
},
{
type:'list',
indentation:'108',
data:'• Capacitor C70',
},
{
type:'list',
indentation:'39.6',
data:'5.2. If components are OK, change the Tecar board.',
},
{
type:'list',
indentation:'18',
data:'6. Close the device.',
},
{
type:'keywords',
data:[
'Error',
'230',
'5V',
'TECAR',
'Under',
'Voltage',
]
},
{
type:'filters',
data:[
'Back3',
'Back4',
]
},
],
images:{
image1:require('./Draft_Error_230_TECAR_5V_Under_Voltage/word/media/image1.png'),
image2:require('./Draft_Error_230_TECAR_5V_Under_Voltage/word/media/image2.jpeg'),
image3:require('./Draft_Error_230_TECAR_5V_Under_Voltage/word/media/image3.jpeg'),
},
}
