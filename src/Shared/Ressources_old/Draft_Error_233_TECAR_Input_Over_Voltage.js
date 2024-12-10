export default {
data:[
{
type:'title',
data:'ERROR 233 – TECAR INPUT OVER VOLTAGE',
},
{
type:'title',
data:'Description',
},
{
type:'text',
data:'A pop-up "ERROR: VIN UNDER VOLTAGE TECAR *” appeared on the screen (* = voltage value).',
},
{
type:'title',
data:'Analysis',
},
{
type:'list',
indentation:'18',
data:'1. Even if the device is switched off and on, the error will occur again.',
},
{
type:'list',
indentation:'18',
data:'2. The device is unusable, and the problem can’t be fixed remotely.',
},
{
type:'list',
indentation:'18',
data:'3. The device must be sent to WINBACK after-sales service.',
},
{
type:'title',
data:'Solution',
},
{
type:'text',
data:'A supply component must be replaced.',
},
{
type:'list',
indentation:'18',
data:'1. Open the device. Unscrew the 4 screws with a 25mm TORX type screwdriver.',
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
data:'3. Check voltage between TP1 and TP9 on the TECAR board:',
},
{
type:'image',
data:'image2',
},
{
type:'list',
indentation:'18',
data:'4. If voltage is higher than 55V:',
},
{
type:'list',
indentation:'39.6',
data:'4.1.  Disconnect all boards and check voltage between both supply terminal.',
},
{
type:'text',
data:' ',
},
{
type:'list',
indentation:'39.6',
data:'4.2. If voltage is higher than 55V, set the supply under 55V or replace the supply.',
},
{
type:'list',
indentation:'18',
data:'5. If voltage is lower than 55V:',
},
{
type:'list',
indentation:'39.6',
data:'5.1.  Check components:',
},
{
type:'list',
indentation:'108',
data:'• Resistances R111, R112, R113',
},
{
type:'list',
indentation:'108',
data:'• Capacitor C79',
},
{
type:'list',
indentation:'108',
data:'• Diode D30',
},
{
type:'list',
indentation:'39.6',
data:'5.2. If components are OK, change the Tecar board.',
},
{
type:'keywords',
data:[
'Error',
'233',
'Input',
'TECAR',
'Over',
'Voltage',
]
},
{
type:'filters',
data:[
'Back2',
'Back4',
]
},
],
images:{
image1:require('./Draft_Error_233_TECAR_Input_Over_Voltage/word/media/image1.png'),
image2:require('./Draft_Error_233_TECAR_Input_Over_Voltage/word/media/image2.jpeg'),
},
}
