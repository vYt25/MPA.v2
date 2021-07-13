<?php

use App\GeneralInformation;
use App\Http\Controllers\ViewingController;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*=============================================================================================================*/
/*                                            Login Controller                                                 */
/*=============================================================================================================*/

Route::post('/MPALogin', 'LoginController@MPALogin');

/*=============================================================================================================*/
/*                                            Modify Application Controller                                    */
/*=============================================================================================================*/

Route::post('/UpdateApplication', 'ModifyApplicationController@UpdateApplication');

Route::post('/CancelApplication', 'ModifyApplicationController@CancelApplication');

/*=============================================================================================================*/
/*                                            Masterlist Controller                                            */
/*=============================================================================================================*/

Route::get('/getMasterLists', 'MasterListController@getMasterLists');


/*=============================================================================================================*/
/*                                            Approval Controller                                              */
/*=============================================================================================================*/

Route::post('/ApproveApplication', 'ApprovalController@ApproveApplication');

Route::post('/MultipleApproveApplication', 'ApprovalController@MultipleApproveApplication');

Route::post('/DisapproveApplication', 'ApprovalController@DisapproveApplication');

Route::post('/MultipleDisapproveApplication', 'ApprovalController@MultipleDisapproveApplication');

/*=============================================================================================================*/
/*                                            Maintainance Controller                                          */
/*=============================================================================================================*/

Route::get('/GetDepartment', 'MaintainanceController@GetDepartment');

Route::post('/UpdateDepartment', 'MaintainanceController@UpdateDepartment');

/*=============================================================================================================*/
/*                                            User Controller                                                  */
/*=============================================================================================================*/

Route::get('/GetUsers', 'UserController@GetUsers');

/*=============================================================================================================*/
/*                                            Application Controller                                           */
/*=============================================================================================================*/

Route::get('/getDate', 'ApplicationController@getDate');

Route::post('/RegisterApplication', 'ApplicationController@RegisterApplication');

Route::post('/SearchApplicationItems', 'ApplicationController@SearchApplicationItems');

Route::post('/GetApplicationDetails', 'ApplicationController@GetApplicationDetails');

Route::post('/SaveDraft', 'ApplicationController@SaveDraft');

Route::post('/GetDrafts', 'ApplicationController@GetDrafts');

Route::post('/DeleteDraft', 'ApplicationController@DeleteDraft');

Route::post('/ConfirmDoneInspection', 'ApplicationController@ConfirmDoneInspection');

Route::post('/UploadInvoice', 'ApplicationController@UploadInvoice');

Route::post('/UploadBl', 'ApplicationController@UploadBl');

Route::post('/DeleteAttachment', 'ApplicationController@DeleteAttachment');

Route::post('/UploadPo', 'ApplicationController@UploadPo');

Route::post('/DeletePoAttachment', 'ApplicationController@DeletePoAttachment');

Route::post('/DeleteInvoiceAttachment', 'ApplicationController@DeleteInvoiceAttachment');

Route::post('/DeleteBlAttachment', 'ApplicationController@DeleteBlAttachment');

/*=============================================================================================================*/
/*                                            Viewing Controller                                               */
/*=============================================================================================================*/

Route::post('/GetApplications', 'ViewingController@GetApplications');

Route::post('/GetApplicationCount', 'ViewingController@GetApplicationCount');

Route::post('/getMpaDetails', 'ViewingController@getMpaDetails');

/*=============================================================================================================*/
/*                                            Notification Controller                                          */
/*=============================================================================================================*/

Route::post('/GetNotifications', 'NotificationController@GetNotifications');

Route::post('/GetNotifications', "NotificationController@GetNotifications");


/*=============================================================================================================*/
/*                                            Account Controller                                               */
/*=============================================================================================================*/

Route::post('/UpdateUserAccount', 'AccountsController@UpdateUserAccount');

Route::post('/DeleteUser', "AccountsController@DeleteUser");

Route::post('/RestoreUser', "AccountsController@RestoreUser");

Route::post('/UpdateUser', "AccountsController@UpdateUser");

Route::post('/AddNewUser', 'AccountsController@AddNewUser');


/*=============================================================================================================*/
/*                                            DataExtraction Controller                                        */
/*=============================================================================================================*/

Route::post('/ForExtract', 'DataExtractionController@ForExtract');

Route::post('/GetCompanies', 'DataExtractionController@GetCompanies');

Route::get('/ExtractData', 'DataExtractionController@ExtractData');



// Route::get('/RegisterUser', function () {
//     $users = array(
//         0 => array(
//             'EmployeeID' => '2084073',
//             'FirstNameEng' => 'NOVIE',
//             'LastNameEng' => 'MABUTE',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '2084073',
//             'Email' => 'n-mabute@hrd-s.com'
//         ),
//         1 => array(
//             'EmployeeID' => '0000299',
//             'FirstNameEng' => 'NATHAN MAE',
//             'LastNameEng' => 'CANETE',
//             'Department' => 'LOADING',
//             'AccessLevel' => '2',
//             'Password' => '0000299',
//             'Email' => 'pvpurchasing@hrd-s.com'
//         ),
//         2 => array(
//             'EmployeeID' => '1046520',
//             'FirstNameEng' => 'MELANIE',
//             'LastNameEng' => 'MADRIGAL',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '1046520',
//             'Email' => 'smc-purchasing06@hrd-s.com'
//         ),
//         3 => array(
//             'EmployeeID' => '4039835',
//             'FirstNameEng' => 'ROBELYN',
//             'LastNameEng' => 'FABROS',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '4039835',
//             'Email' => 'mc8-wkn@hrd-s.com'
//         ),
//         4 => array(
//             'EmployeeID' => '8695',
//             'FirstNameEng' => 'MARIVIC',
//             'LastNameEng' => 'HUET',
//             'Department' => 'GLOBAL PURCHASING CENTER',
//             'AccessLevel' => '2',
//             'Password' => '8695',
//             'Email' => 'gpc29@hrd-s.com'
//         ),
//         5 => array(
//             'EmployeeID' => '30549',
//             'FirstNameEng' => 'SHARLEEN JOY',
//             'LastNameEng' => 'MISA',
//             'Department' => 'GLOBAL PURCHASING CENTER',
//             'AccessLevel' => '2',
//             'Password' => '30549',
//             'Email' => 'gpc32@hrd-s.com'
//         ),
//         6 => array(
//             'EmployeeID' => '4035375',
//             'FirstNameEng' => 'EZEKIEL',
//             'LastNameEng' => 'MIRANDA',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '4035375',
//             'Email' => 'import-wkn@hrd-s.com'
//         ),
//         7 => array(
//             'EmployeeID' => '2019251',
//             'FirstNameEng' => 'SHERLY',
//             'LastNameEng' => 'GAHOL',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '2019251',
//             'Email' => 'smc-purchasing02@hrd-s.com'
//         ),
//         8 => array(
//             'EmployeeID' => '1037245',
//             'FirstNameEng' => 'LEONIDA',
//             'LastNameEng' => 'MORENO',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '1037245',
//             'Email' => 'htipayments@hrd-s.com'
//         ),
//         9 => array(
//             'EmployeeID' => '1026213',
//             'FirstNameEng' => 'ARMIE',
//             'LastNameEng' => 'PEREZ',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '1026213',
//             'Email' => 'smc-purchasing09@hrd-s.com'
//         ),
//         10 => array(
//             'EmployeeID' => '1089158',
//             'FirstNameEng' => 'ALFREDO',
//             'LastNameEng' => 'CABINAN',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '1089158',
//             'Email' => 'smc-purchasing12@hrd-s.com'
//         ),
//         11 => array(
//             'EmployeeID' => '1083999',
//             'FirstNameEng' => 'JERUSHA',
//             'LastNameEng' => 'MAPALAD',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '1083999',
//             'Email' => 'smc-purchasing07@hrd-s.com'
//         ),
//         12 => array(
//             'EmployeeID' => '2009986',
//             'FirstNameEng' => 'MARIA ELA LUZ',
//             'LastNameEng' => 'CORPUZ',
//             'Department' => 'ADMINISTRATION',
//             'AccessLevel' => '2',
//             'Password' => '2009986',
//             'Email' => 'htiadmin01@hrd-s.com'
//         ),
//         13 => array(
//             'EmployeeID' => '2002859',
//             'FirstNameEng' => 'CELESTINO',
//             'LastNameEng' => 'ALMAZAN',
//             'Department' => 'BALCONY',
//             'AccessLevel' => '2',
//             'Password' => '2002859',
//             'Email' => 'c-almazan@hrd-s.com'
//         ),
//         14 => array(
//             'EmployeeID' => '2054016',
//             'FirstNameEng' => 'ALVIN',
//             'LastNameEng' => 'BRIONES',
//             'Department' => 'BOILER',
//             'AccessLevel' => '2',
//             'Password' => '2054016',
//             'Email' => 'hti-boiler03@hrd-s.com'
//         ),
//         15 => array(
//             'EmployeeID' => '2084071',
//             'FirstNameEng' => 'LUIS CHITO',
//             'LastNameEng' => 'MENDOZA JR.',
//             'Department' => 'CERAMIC PROCESSING',
//             'AccessLevel' => '2',
//             'Password' => '2084071',
//             'Email' => 'c-mendoza@hrd-s.com'
//         ),
//         16 => array(
//             'EmployeeID' => '2059614',
//             'FirstNameEng' => 'ROXANNE',
//             'LastNameEng' => 'CLIMACOSA',
//             'Department' => 'CERAMIC TILE PRODUCTION',
//             'AccessLevel' => '2',
//             'Password' => '2059614',
//             'Email' => 'r-climacosa@hrd-s.com'
//         ),
//         17 => array(
//             'EmployeeID' => '2069873',
//             'FirstNameEng' => 'JONATHAN',
//             'LastNameEng' => 'CARREON',
//             'Department' => 'ENGINEERING',
//             'AccessLevel' => '2',
//             'Password' => '2069873',
//             'Email' => 'j-carreon@hrd-s.com'
//         ),
//         18 => array(
//             'EmployeeID' => '2001644',
//             'FirstNameEng' => 'HELEN',
//             'LastNameEng' => 'DIAZ',
//             'Department' => 'EXTERIOR UNIT',
//             'AccessLevel' => '2',
//             'Password' => '2001644',
//             'Email' => 'h-diaz@hrd-s.com'
//         ),
//         19 => array(
//             'EmployeeID' => '2045869',
//             'FirstNameEng' => 'ROLANDO',
//             'LastNameEng' => 'MANALASTAS JR.',
//             'Department' => 'FSE',
//             'AccessLevel' => '2',
//             'Password' => '2045869',
//             'Email' => 'r-manalastas@hrd-s.com'
//         ),
//         20 => array(
//             'EmployeeID' => '2124930',
//             'FirstNameEng' => 'SHEILA',
//             'LastNameEng' => 'CASAJES',
//             'Department' => 'I-CUBE CEILING',
//             'AccessLevel' => '2',
//             'Password' => '2124930',
//             'Email' => 's-casajes@hrd-s.com'
//         ),
//         21 => array(
//             'EmployeeID' => '2011610',
//             'FirstNameEng' => 'MERCY',
//             'LastNameEng' => 'MIRANDA',
//             'Department' => 'I-CUBE INSULATION',
//             'AccessLevel' => '2',
//             'Password' => '2011610',
//             'Email' => 'm-miranda@hrd-s.com'
//         ),
//         22 => array(
//             'EmployeeID' => '2053462',
//             'FirstNameEng' => 'MALBERT',
//             'LastNameEng' => 'LEANDICHO',
//             'Department' => 'I-CUBE MAINTENANCE',
//             'AccessLevel' => '2',
//             'Password' => '2053462',
//             'Email' => 'm-leandicho@hrd-s.com'
//         ),
//         23 => array(
//             'EmployeeID' => '2098081',
//             'FirstNameEng' => 'JOSELITO',
//             'LastNameEng' => 'LOPEZ',
//             'Department' => 'SIDING',
//             'AccessLevel' => '2',
//             'Password' => '2098081',
//             'Email' => 'j-lopezjr@hrd-s.com'
//         ),
//         24 => array(
//             'EmployeeID' => '2052348',
//             'FirstNameEng' => 'JOSELITO',
//             'LastNameEng' => 'BUNGCASAN',
//             'Department' => 'I-CUBE PRODUCTION CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '2052348',
//             'Email' => 'j-bungcasan@hrd-s.com'
//         ),
//         25 => array(
//             'EmployeeID' => '2000476',
//             'FirstNameEng' => 'MARLYN',
//             'LastNameEng' => 'DINO',
//             'Department' => 'I-CUBE ROOF GABLE',
//             'AccessLevel' => '2',
//             'Password' => '2000476',
//             'Email' => 'm-dino@hrd-s.com'
//         ),
//         26 => array(
//             'EmployeeID' => '2001560',
//             'FirstNameEng' => 'ANGELO',
//             'LastNameEng' => 'RIGON',
//             'Department' => 'I-CUBE TILING',
//             'AccessLevel' => '2',
//             'Password' => '2001560',
//             'Email' => 'a-rigon@hrd-s.com'
//         ),
//         27 => array(
//             'EmployeeID' => '2066415',
//             'FirstNameEng' => 'EMMANUEL',
//             'LastNameEng' => 'MARQUEZ',
//             'Department' => 'I-CUBE WALL 1',
//             'AccessLevel' => '2',
//             'Password' => '2066415',
//             'Email' => 'e-marquez@hrd-s.com'
//         ),
//         28 => array(
//             'EmployeeID' => '2124931',
//             'FirstNameEng' => 'SHERRY',
//             'LastNameEng' => 'DE LEON',
//             'Department' => 'I-CUBE WALL 2',
//             'AccessLevel' => '2',
//             'Password' => '2124931',
//             'Email' => 's_deleon@hrd-s.com'
//         ),
//         29 => array(
//             'EmployeeID' => '2045870',
//             'FirstNameEng' => 'RODOLFO',
//             'LastNameEng' => 'MOJICA',
//             'Department' => 'I-CUBE WALL 3',
//             'AccessLevel' => '2',
//             'Password' => '2045870',
//             'Email' => 'ht-icubeDHTprep@hrd-s.com'
//         ),
//         30 => array(
//             'EmployeeID' => '2043928',
//             'FirstNameEng' => 'ESTEBAN',
//             'LastNameEng' => 'COLUMNA',
//             'Department' => 'I-HEAD',
//             'AccessLevel' => '2',
//             'Password' => '2043928',
//             'Email' => 'e-columna@hrd-s.com'
//         ),
//         31 => array(
//             'EmployeeID' => '2042109',
//             'FirstNameEng' => 'RUEL',
//             'LastNameEng' => 'JOSE',
//             'Department' => 'INSULATION MOULDING',
//             'AccessLevel' => '2',
//             'Password' => '2042109',
//             'Email' => 'r_jose@hrd-s.com'
//         ),
//         32 => array(
//             'EmployeeID' => '2000005',
//             'FirstNameEng' => 'ARCADIO',
//             'LastNameEng' => 'DELA CRUZ JR.',
//             'Department' => 'IUB',
//             'AccessLevel' => '2',
//             'Password' => '2000005',
//             'Email' => 'a-delacruz@hrd-s.com'
//         ),
//         33 => array(
//             'EmployeeID' => '2071446',
//             'FirstNameEng' => 'JUANCHO',
//             'LastNameEng' => 'DALEN',
//             'Department' => 'MAINTENANCE',
//             'AccessLevel' => '2',
//             'Password' => '2071446',
//             'Email' => 'j-dalen@hrd-s.com'
//         ),
//         34 => array(
//             'EmployeeID' => '2084064',
//             'FirstNameEng' => 'FLORENCE',
//             'LastNameEng' => 'MANUEL',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '2084064',
//             'Email' => 'f-manuel@hrd-s.com'
//         ),
//         35 => array(
//             'EmployeeID' => '2002192',
//             'FirstNameEng' => 'CHONA',
//             'LastNameEng' => 'VIDALLON',
//             'Department' => 'PANEL LOADING',
//             'AccessLevel' => '2',
//             'Password' => '2002192',
//             'Email' => 'c-vidallon@hrd-s.com'
//         ),
//         36 => array(
//             'EmployeeID' => '2059574',
//             'FirstNameEng' => 'ALBERT',
//             'LastNameEng' => 'SANTIAGO',
//             'Department' => 'SIDING',
//             'AccessLevel' => '2',
//             'Password' => '2059574',
//             'Email' => 'hti-siding05@hrd-s.com'
//         ),
//         37 => array(
//             'EmployeeID' => '2043438',
//             'FirstNameEng' => 'RONALIZA',
//             'LastNameEng' => 'NOVERO',
//             'Department' => 'TRANSPORT',
//             'AccessLevel' => '2',
//             'Password' => '2043438',
//             'Email' => 'r-novero@hrd-s.com'
//         ),
//         38 => array(
//             'EmployeeID' => '2000221',
//             'FirstNameEng' => 'MARIO',
//             'LastNameEng' => 'VILLANUEVA',
//             'Department' => 'UNIT PIPE',
//             'AccessLevel' => '2',
//             'Password' => '2000221',
//             'Email' => 'm_villanueva@hrd-s.com'
//         ),
//         39 => array(
//             'EmployeeID' => '4014735',
//             'FirstNameEng' => 'MA. ANGELINE',
//             'LastNameEng' => 'NAVARRO',
//             'Department' => 'PV',
//             'AccessLevel' => '2',
//             'Password' => '4014735',
//             'Email' => 'pvenvi@hrd-s.com'
//         ),
//         40 => array(
//             'EmployeeID' => '0000367',
//             'FirstNameEng' => 'MELANIO',
//             'LastNameEng' => 'PINEDA',
//             'Department' => 'PM',
//             'AccessLevel' => '2',
//             'Password' => '0000367',
//             'Email' => 'powerplant01@hrd-s.com'
//         ),
//         41 => array(
//             'EmployeeID' => '1074596',
//             'FirstNameEng' => 'BEVERLY',
//             'LastNameEng' => 'OLEDIANA',
//             'Department' => 'ADMINISTRATION',
//             'AccessLevel' => '2',
//             'Password' => '1074596',
//             'Email' => 'employeerelation@hrd-s.com'
//         ),
//         42 => array(
//             'EmployeeID' => '1000389',
//             'FirstNameEng' => 'ARNEL',
//             'LastNameEng' => 'PANGANIBAN',
//             'Department' => 'CABINET',
//             'AccessLevel' => '2',
//             'Password' => '1000389',
//             'Email' => 'a-panganiban@hrd-s.com'
//         ),
//         43 => array(
//             'EmployeeID' => '1019340',
//             'FirstNameEng' => 'KENT',
//             'LastNameEng' => 'LACUMBES',
//             'Department' => 'DOOR',
//             'AccessLevel' => '2',
//             'Password' => '1019340',
//             'Email' => 'k-lacumbes@hrd-s.com'
//         ),
//         44 => array(
//             'EmployeeID' => '1000498',
//             'FirstNameEng' => 'HECTOR',
//             'LastNameEng' => 'PAREJA',
//             'Department' => 'FLOOR-PIANO',
//             'AccessLevel' => '2',
//             'Password' => '1000498',
//             'Email' => 'h-pareja@hrd-s.com'
//         ),
//         45 => array(
//             'EmployeeID' => '1068080',
//             'FirstNameEng' => 'EDISON',
//             'LastNameEng' => 'CADAG',
//             'Department' => 'MAINTENANCE',
//             'AccessLevel' => '2',
//             'Password' => '1068080',
//             'Email' => 'maintenance@hrd-s.com'
//         ),
//         46 => array(
//             'EmployeeID' => '1016074',
//             'FirstNameEng' => 'ARLEE',
//             'LastNameEng' => 'GAMBOA',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '1016074',
//             'Email' => 'a-gamboa@hrd-s.com'
//         ),
//         47 => array(
//             'EmployeeID' => '1061521',
//             'FirstNameEng' => 'VILMA',
//             'LastNameEng' => 'JORDAN',
//             'Department' => 'MOULDING',
//             'AccessLevel' => '2',
//             'Password' => '1061521',
//             'Email' => 'v-jordan@hrd-s.com'
//         ),
//         48 => array(
//             'EmployeeID' => '1000569',
//             'FirstNameEng' => 'DARWIN',
//             'LastNameEng' => 'FERRER',
//             'Department' => 'PANEL',
//             'AccessLevel' => '2',
//             'Password' => '1000569',
//             'Email' => 'd_ferrer@hrd-s.com'
//         ),
//         49 => array(
//             'EmployeeID' => '1038375',
//             'FirstNameEng' => 'VERONICA',
//             'LastNameEng' => 'TORRES',
//             'Department' => 'QUALITY ASSURANCE',
//             'AccessLevel' => '2',
//             'Password' => '1038375',
//             'Email' => 'sc-pcotrainee@hrd-s.com'
//         ),
//         50 => array(
//             'EmployeeID' => '4019430',
//             'FirstNameEng' => 'IVY',
//             'LastNameEng' => 'ARGUELLES',
//             'Department' => 'ADMINISTRATION',
//             'AccessLevel' => '2',
//             'Password' => '4019430',
//             'Email' => 'hrd-training@hrd-s.com'
//         ),
//         51 => array(
//             'EmployeeID' => '4025634',
//             'FirstNameEng' => 'JUN',
//             'LastNameEng' => 'BLANCIO',
//             'Department' => 'QA',
//             'AccessLevel' => '2',
//             'Password' => '4025634',
//             'Email' => 'wkn-qa@hrd-s.com'
//         ),
//         52 => array(
//             'EmployeeID' => '1000077',
//             'FirstNameEng' => 'MARVIN',
//             'LastNameEng' => 'BARIC',
//             'Department' => 'HRD-C',
//             'AccessLevel' => '2',
//             'Password' => '1000077',
//             'Email' => 'm-baric@hrd-s.com'
//         ),
//         53 => array(
//             'EmployeeID' => '4023439',
//             'FirstNameEng' => 'ANNA LOU',
//             'LastNameEng' => 'MAHUMOT',
//             'Department' => 'GLULAM',
//             'AccessLevel' => '2',
//             'Password' => '4023439',
//             'Email' => 'wkn-hagara@hrd-s.com'
//         ),
//         54 => array(
//             'EmployeeID' => '4059913',
//             'FirstNameEng' => 'ROMEL',
//             'LastNameEng' => 'DINCO',
//             'Department' => 'HEAVY EQUIPMENT',
//             'AccessLevel' => '2',
//             'Password' => '4059913',
//             'Email' => 'r-dinco@hrd-s.com'
//         ),
//         55 => array(
//             'EmployeeID' => '4000042',
//             'FirstNameEng' => 'EDGARDO',
//             'LastNameEng' => 'CALDERON',
//             'Department' => 'MAINTENANCE',
//             'AccessLevel' => '2',
//             'Password' => '4000042',
//             'Email' => 'e-calderon@hrd-s.com'
//         ),
//         56 => array(
//             'EmployeeID' => '4026780',
//             'FirstNameEng' => 'MARLON',
//             'LastNameEng' => 'PENOS',
//             'Department' => 'MATERIAL CONTROL',
//             'AccessLevel' => '2',
//             'Password' => '4026780',
//             'Email' => 'mc2-wkn@hrd-s.com'
//         ),
//         57 => array(
//             'EmployeeID' => '4037661',
//             'FirstNameEng' => 'JOSE',
//             'LastNameEng' => 'CASTILLO III',
//             'Department' => 'PLASTIC MOLDING',
//             'AccessLevel' => '2',
//             'Password' => '4037661',
//             'Email' => 'j_castillo@hrd-s.com'
//         ),
//         58 => array(
//             'EmployeeID' => '4031831',
//             'FirstNameEng' => 'JAY',
//             'LastNameEng' => 'DUMOL',
//             'Department' => 'PREPARATION',
//             'AccessLevel' => '2',
//             'Password' => '4031831',
//             'Email' => 'j-dumol@hrd-s.com'
//         ),
//         59 => array(
//             'EmployeeID' => '4005251',
//             'FirstNameEng' => 'DIANA',
//             'LastNameEng' => 'MANALASTAS',
//             'Department' => 'STEEL',
//             'AccessLevel' => '2',
//             'Password' => '4005251',
//             'Email' => 'steel1@hrd-s.com'
//         ),
//         60 => array(
//             'EmployeeID' => '4001369',
//             'FirstNameEng' => 'JOSELITO RAFAEL',
//             'LastNameEng' => 'BOLUSA',
//             'Department' => 'STRUCTURAL',
//             'AccessLevel' => '2',
//             'Password' => '4001369',
//             'Email' => 'j-bolusa@hrd-s.com'
//         ),
//         61 => array(
//             'EmployeeID' => '1050734',
//             'FirstNameEng' => 'NOEL',
//             'LastNameEng' => 'CABALSE',
//             'Department' => 'MAINTENANCE',
//             'AccessLevel' => '2',
//             'Password' => '1050734',
//             'Email' => 'n_cabalse@scadmail.com'
//         ),
//         62 => array(
//             'EmployeeID' => '4018309',
//             'FirstNameEng' => 'AURELIA',
//             'LastNameEng' => 'BAJON',
//             'Department' => 'MAINTENANCE',
//             'AccessLevel' => '2',
//             'Password' => '4018309',
//             'Email' => 'wkn-maint01@hrd-s.com'
//         ),
//         63 => array(
//             'EmployeeID' => '03653',
//             'FirstNameEng' => 'JUDITH',
//             'LastNameEng' => 'ROMERO',
//             'Department' => 'ACCOUNTING',
//             'AccessLevel' => '2',
//             'Password' => '03653',
//             'Email' => 'general-affairs03@hrd-s.com'
//         ),
//         64 => array(
//             'EmployeeID' => '2139706',
//             'FirstNameEng' => 'HAROLD',
//             'LastNameEng' => 'VENDER',
//             'Department' => 'MAINTENANCE',
//             'AccessLevel' => '2',
//             'Password' => '2139706',
//             'Email' => 'hti-maintenance@hrd-s.com'
//         ),
//         65 => array(
//             'EmployeeID' => '2071536',
//             'FirstNameEng' => 'CATHERINE',
//             'LastNameEng' => 'BRAGADO',
//             'Department' => 'CERAMIC TILE PRODUCTION',
//             'AccessLevel' => '2',
//             'Password' => '2071536',
//             'Email' => 'm-ceramics@hrd-s.com'
//         ),
//         66 => array(
//             'EmployeeID' => '2047571',
//             'FirstNameEng' => 'SHEILA',
//             'LastNameEng' => 'SUELA',
//             'Department' => 'I-CUBE MAINTENANCE',
//             'AccessLevel' => '2',
//             'Password' => '2047571',
//             'Email' => 'i-cube_engineering@hrd-s.com'
//         ),
//         67 => array(
//             'EmployeeID' => '2143818',
//             'FirstNameEng' => 'JOEL',
//             'LastNameEng' => 'PENOS',
//             'Department' => 'SIDING',
//             'AccessLevel' => '2',
//             'Password' => '2143818',
//             'Email' => 'hti-siding01@hrd-s.com'
//         ),
//         68 => array(
//             'EmployeeID' => '2041344',
//             'FirstNameEng' => 'ARNOLD',
//             'LastNameEng' => 'SOBEJANA',
//             'Department' => 'SIDING',
//             'AccessLevel' => '2',
//             'Password' => '2041344',
//             'Email' => 'hti-siding03@hrd-s.com'
//         ),
//         69 => array(
//             'EmployeeID' => '0001305',
//             'FirstNameEng' => 'CINDY',
//             'LastNameEng' => 'MIRANDILLA',
//             'Department' => 'PM',
//             'AccessLevel' => '2',
//             'Password' => '0001305',
//             'Email' => 'pvfacility@hrd-s.com'
//         ),
//         70 => array(
//             'EmployeeID' => '4003049',
//             'FirstNameEng' => 'MAILA',
//             'LastNameEng' => 'SANTOS',
//             'Department' => 'MAINTENANCE',
//             'AccessLevel' => '2',
//             'Password' => '4003049',
//             'Email' => 'wkn-maint02@hrd-s.com'
//         ),
//     );
//     // $users = (object)$users;
//     $datetime = date('Y-m-d H:i:s');
//     foreach ($users as $key => $val) {
//         $users[$key]['Password'] = Hash::make(md5($val['Password']));
//         $users[$key]['AccessLevel'] = (int)$val['AccessLevel'];
//         $users[$key]['created_at'] = $datetime;
//     }
//     User::insert($users);
//     // return $users;
// });

// Route::get('/pw', function () {
//     return md5('   ');
// });

// Route::post('/test', function (Request $req) {
//     // return count($req->data);
//     foreach ($req->data as $key => $val) {
//         if (isset($val['EmployeeNumber'])) {
//             $user = User::where('EmployeeID', $val['EmployeeNumber'])->first();
//             $user->FirstNameJap = $val['FirstName'];
//             $user->LastNameJap = $val['LastName'];
//             $user->update();
//         }
//         // echo '<br/>';
//         // echo $val['FirstName'] . '<br/>';
//         // echo $val['LastName'] . '<hr>';
//     }
//     // return Hash::make(md5('0407'));
// });

// Route::get('/test', function () {
//     return GeneralInformation::select('MpaNo')->with('items')->get();
// });
