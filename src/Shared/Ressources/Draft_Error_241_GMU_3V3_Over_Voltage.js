export default {
data:[
{
type:'title',
data:'ERROR 241 – GMU 3V3 OVER VOLTAGE',
},
{
type:'title',
data:'Description',
},
{
type:'text',
data:'A pop-up "ERROR: OVER VOLTAGE 3V3 GMU" appeared on the screen.',
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
data:'3. Check voltage between TP3 and TP5 on the GMU board:',
},
{
type:'image',
data:'image2',
},
{
type:'list',
indentation:'18',
data:'4. If voltage is higher than 3.5V:',
},
{
type:'list',
indentation:'39.6',
data:'4.1.  Check components:',
},
{
type:'list',
indentation:'108',
data:'• Capacitors C36, C37, C38, C39',
},
{
type:'list',
indentation:'39.6',
data:'4.2. If components are OK, replace the component NCP1117ST33 (VR2) or change the GMU board.',
},
{
type:'image',
data:'image3',
},
{
type:'list',
indentation:'18',
data:'5. If voltage is lower than 3.5V:',
},
{
type:'list',
indentation:'39.6',
data:'5.1. Check components:',
},
{
type:'list',
indentation:'108',
data:'• Resistances R129, R134',
},
{
type:'list',
indentation:'108',
data:'• Capacitor C80',
},
{
type:'list',
indentation:'39.6',
data:'5.2. If components are OK, change the GMU board.',
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
'241',
'3V3',
'3,3V',
'GMU',
'Over',
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
image1:require('./Draft_Error_241_GMU_3V3_Over_Voltage/word/media/image1.png'),
image2:require('./Draft_Error_241_GMU_3V3_Over_Voltage/word/media/image2.jpeg'),
image3:require('./Draft_Error_241_GMU_3V3_Over_Voltage/word/media/image3.jpeg'),
},
}
