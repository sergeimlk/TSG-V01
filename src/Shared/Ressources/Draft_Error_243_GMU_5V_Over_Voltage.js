export default {
data:[
{
type:'title',
data:'ERROR 243 – GMU 5V OVER VOLTAGE',
},
{
type:'title',
data:'Description',
},
{
type:'text',
data:'A pop-up "ERROR: OVER VOLTAGE 5V GMU" appeared on the screen.',
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
data:'3. Check voltage between TP2 and TP5 on the GMU board:',
},
{
type:'text',
data:'',
},
{
type:'list',
indentation:'18',
data:'4. If voltage is higher than 5.5V:',
},
{
type:'list',
indentation:'39.6',
data:'4.1. Check components:',
},
{
type:'list',
indentation:'108',
data:'• Resistances R33, R28, R34',
},
{
type:'list',
indentation:'108',
data:'• Capacitors C27, C28, C29, C30, C31, C32, C33, C34, C35',
},
{
type:'list',
indentation:'108',
data:'• Inductor L18',
},
{
type:'list',
indentation:'39.6',
data:'4.2. If components are OK, replace the component LMR16020 (VR1) or change the GMU board.',
},
{
type:'image',
data:'image2',
},
{
type:'list',
indentation:'18',
data:'5. If voltage is lower than 5.5V:',
},
{
type:'list',
indentation:'39.6',
data:'5.1. Check components:',
},
{
type:'list',
indentation:'108',
data:'• Resistances R130, R135',
},
{
type:'list',
indentation:'108',
data:'• Capacitor C81',
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
'243',
'5V',
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
image1:require('./Draft_Error_243_GMU_5V_Over_Voltage/word/media/image1.png'),
image2:require('./Draft_Error_243_GMU_5V_Over_Voltage/word/media/image2.jpeg'),
},
}
