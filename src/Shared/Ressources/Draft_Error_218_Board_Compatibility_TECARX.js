﻿export default {
data:[
{
type:'title',
data:'ERROR 218 – BOARD COMPATIBILITY TECARX',
},
{
type:'title',
data:'Description',
},
{
type:'text',
data:'A pop-up “ERROR: BOARDS VERSION NOT COMPATIBLE ON WAY *” appeared on the screen (* = Board ID).',
},
{
type:'text',
data:'A TECARX is not compatible with the device (the TECARX version is different from the device version).',
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
data:'2. Even if the device is switched OFF and ON, the error will occur again.',
},
{
type:'list',
indentation:'18',
data:'3. Even if the TECARX is disconnected and connected to the generic cable, the error will occur again.',
},
{
type:'list',
indentation:'18',
data:'4. The TECARX is unusable, and the problem can’t be fixed remotely.',
},
{
type:'list',
indentation:'18',
data:'5. The TECARX must be sent to WINBACK after-sales service.',
},
{
type:'title',
data:'Repair',
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
data:'2. Switch OFF the device, check if RJ45 cable is connected between GMU and TECAR boards.',
},
{
type:'image',
data:'image2',
},
{
type:'list',
indentation:'18',
data:'3. Check components on the GMU board:',
},
{
type:'list',
indentation:'88.8',
data:'• Resistances R7, R8, R9, R10, R12, R13, R14, R15, R16',
},
{
type:'list',
indentation:'88.8',
data:'• Capacitors C6, C8, C11',
},
{
type:'list',
indentation:'88.8',
data:'• Diodes D5, D6',
},
{
type:'list',
indentation:'88.8',
data:'• Inductors L4, L5',
},
{
type:'list',
indentation:'18',
data:'4. Check components on the TECAR board:',
},
{
type:'list',
indentation:'88.8',
data:'• Resistances R13, R15, R21, R22, R14, R20, R16, R19',
},
{
type:'list',
indentation:'88.8',
data:'• Capacitors C12, C13, C16',
},
{
type:'list',
indentation:'88.8',
data:'• Diodes D13, D14',
},
{
type:'list',
indentation:'88.8',
data:'• Inductors L23, L24',
},
{
type:'list',
indentation:'18',
data:'5. If all components are OK, change component SP485E (U1) on the GMU board.',
},
{
type:'image',
data:'image3',
},
{
type:'list',
indentation:'18',
data:'6. If the error occurred again, change component SP485E (U11) on the TECAR board.',
},
{
type:'image',
data:'image4',
},
{
type:'list',
indentation:'18',
data:'7. If the error occurred again, test with changing GMU or TECAR board, one by one, until error disappears.',
},
{
type:'list',
indentation:'18',
data:'8. Close the device.',
},
{
type:'keywords',
data:[
'Error',
'218',
'Board',
'Compatibility',
'TECARX',
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
image1:require('./Draft_Error_218_Board_Compatibility_TECARX/word/media/image1.png'),
image2:require('./Draft_Error_218_Board_Compatibility_TECARX/word/media/image2.jpeg'),
image3:require('./Draft_Error_218_Board_Compatibility_TECARX/word/media/image3.jpeg'),
image4:require('./Draft_Error_218_Board_Compatibility_TECARX/word/media/image4.jpeg'),
},
}
