app.controller('MainCtrl',function($scope,$state,$rootScope,localStorageService){
		$rootScope.$state = $state;
		$scope.pageElements = [
		{name:"Overview",selected:false,link:'over_view'},
		{name:"Industry Experience",selected:false,link:'firm_exp'},
		{name:"Academic Experience",selected:false,link:'clg_exp'},
		{name:"Skills",selected:false,link:'skill_set'}
//		{name:"Education & Accomplishments",selected:false,link:'education'}
		];
			// skillElements 	
	$scope.skillElements = [{name:"Java EE",selected:false,link:'skill_set'}, //0
		{name:"Python",selected:false,link:'skill_set'}, //1
		{name:"R",selected:false,link:'skill_set'},//2
		{name:"Angular JS",selected:false,link:'skill_set'}, //3
		{name:"D3.js",selected:false,link:'skill_set'}, //4
		{name:"HTML",selected:false,link:'skill_set'}, //5
		{name:"Excel",selected:false,link:'skill_set'}, //6
		{name:"Image Processing",selected:false,link:'skill_set'}, //7
		{name:"Linear Regression",selected:false,link:'skill_set'}, //8
		{name:"Neural Networks",selected:false,link:'skill_set'}, //9
		{name:"Face Detection & Tracking",selected:false,link:'skill_set'}, //10
		{name:"Video Analytics",selected:false,link:'skill_set'}, //11
		{name:"Spring MVC",selected:false,link:'skill_set'}, //12
		{name:"Server Administration",selected:false,link:'skill_set'}, //13
		{name:"NVIDIA CUDA",selected:false,link:'skill_set'}, //14
		{name:"Text Analytics",selected:false,link:'skill_set'}, //15
		{name:"MATLAB",selected:false,link:'skill_set'}, //16
		{name:"Arduino Programming",selected:false,link:'skill_set'}, //17
		{name:"Communication and Networks",selected:false,link:'skill_set'}, //18
		{name:"HFSS-9",selected:false,link:'skill_set'}, //19
		{name:"CircuitCam",selected:false,link:'skill_set'}, //20
		{name:"Feature detection",selected:false,link:'skill_set'} //21
		];

		$scope.msg = "Parent"
		$scope.selectLink = function(attr){
		for (var i=0;i<$scope.pageElements.length;i++){
			if ($scope.pageElements[i].name== attr.name){
				if($scope.pageElements[i].selected){}
				else{
				$scope.pageElements[i].selected =! $scope.pageElements[i].selected;}
			}else{
				$scope.pageElements[i]["selected" ] = false;
			}
			localStorageService.set("selectedTab",attr);
		}
		$state.go(attr.link);
		}
		$scope.init = function(){
			if(localStorageService.get('selectedTab')){
				$scope.selectLink(localStorageService.get('selectedTab'));
			}
			else{
			$scope.selectLink($scope.pageElements[0]);
		}
		}
			$scope.stateGo = function(attr){
		$scope.selectLink($scope.pageElements[3]);
//		$state.go(attr.link);
	};
		$scope.overGo = function(attr){
		$scope.selectLink(attr);
		}
		$scope.init();
});

// Company Page Controller
app.controller('C1Ctrl',function($scope,$state,$rootScope,localStorageService,$sce,$compile){
	$scope.$sce = $sce;
	$rootScope.$state = $state;
	$scope.message = "Mu Sigma";	
	// Company Elements
	$scope.firmElements = [
	{id:"Mu Sigma Business Solutions Pvt. Ltd. ",
	 cdesc:"Analytics & Consulting",
	 image:'musigma.jpg' ,
	 tenure:"Sept 2015 - Present", 
	 // Project Headings
	 first_project_header:"<p class='company_project_heading';>Parts Harmonization<span class='time'>March '16 - May '16</span></p>",
	 second_project_header:"<p class='company_project_heading';>Video Analytics<span class='time'>June '16 - Sept '16</span></p>",
	 third_project_header:"<p class='company_project_heading';>Visualization Portal<span class='time'>Nov '16 - March '17</span></p>",
	 // Project Description
	first_project_desc:"<ul><li>Enabled decisions for a  USA based technology conglomerate  in  procurement optimisation. Identified duplicates at part level on the basis of key part features and descriptions for a given part</li><li>Developed a desktop application i.e. <a ng-click='stateGo(skillElements[0])'>Spec Extractor</a> to extract the important part features from images containing part related information.Identified the correlation between P.O. Cost and various part features</li><li>Created an excel based reporting framework highlighting the optimised procurement options of specified features for a given part</li></ul>",
 	second_project_desc:"<ul><li>Worked with US based home improvement retailer in detecting and tracking of  customers from in-store CCTV footage</li><li>Developed an ensemble <a ng-click='stateGo(skillElements[0])'>neural network model</a> for human face detection and tracking across video frames</li><li>Developed a click tool in python i.e. <a ng-click='stateGo(skillElements[0])'>Time Tagger</a> for tagging customer wait and check out time for model validation</li></ul>",
  	third_project_desc:"<ul><li>Built a web application for US based home improvement retailer to visualize and monitor price sensitivity model results and simulating price sensitivity scores</li><li>Worked as a full stack developer and was responsible for developing middle layer as well as front end architecture</li><li>Created graphical components in d3.js for visualization purposes</li></ul>",
  	// Project Awards
	 first_project_awards:"<a>Spot award,</a><a> involved in development of computer vision course at org level</a>", 
	 second_project_awards:"<a>Impact award,</a><a> presented alogirthm results video demo to CEO & leadership team,</a><a> featured in Mu-Sigma Times article</a>", 
	 // Project Skills
	 first_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[1].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[2].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[7].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[6].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[8].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[15].name}}</a>",
	 second_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[1].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[7].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[9].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[10].name}}</a> <a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[11].name}}</a> <a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[14].name}}</a>",
	 third_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[0].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[12].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[13].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[3].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[4].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[5].name}}</a>"}];

});
// Skill Set Controller
app.controller('C3Ctrl',function($scope,$state,$rootScope,localStorageService){
	$rootScope.$state = $state;
	$scope.pg_details = "<div>I have strong foundations in data structures and algorithms, I am comfortable with Python,MATLAB,C++,Java. At Mu-Sigma, I designed two applications in python and created custom inception layers for neural network face detection model</div>";
	$scope.spec_extr_details = "<ul><li>This application takes images with part specifications against part ID's in tabular form as input and generates excel file with part ID's and desired part specifications</li><li>The user can input the column numbers of desired attributes, application snips the selected columns from the tabular image and runs tesseract engine to extract the captured information</li><li>The extracted information will be cleaned on basis of business rules and exports results to excel file</li></ul>"
	$scope.wait_ext_details = "<ul><li>This application takes video footage as input and generates excel file containing wait and checkout times of customers present in the CCTV footage</li><li>The user can create a collapsable UI row representing customer record and fill customer details, record wait and checkout times by clicking on respective fields</li><li>After the tagging is completed, user can export the captured information into an excel file.</li></ul>"
	$scope.neural_ext_details = "<ul><li>For face detection, used <a href='https://github.com/Russell91/ReInspect' target='_blank'>Reinspect</a> as our base architecture and added custom inception layers to suit our usecase. Used these face detection results as an input to multiple hypothesis tracker to track the customers across video frames</li><li>We implemented preprocessing techniques like RandomCrop, boundingboxshift, color jittering, flipping and rotation of images to enhance model input and to improve the accuracy of neural network outputs</li></ul>"
	$scope.spec_ext_details= "<ul><li>Experienced in performing Data cleaning,text analytics and regression & Cluster analysis in R & Python</li><li>Used Linear & Logistic regression, AP clustering, LSA, JW similarity,NLTK(Python) and created excel dashboards</li></ul>"
	$scope.web_ext_details= "<ul><li>Worked as a full stack developer and developed java based web portal for visualization purposes</li><li>Experienced in using java script variants like angular.js, d3.js along with Bootstrap</li></ul>"
});
// Education Controller
app.controller('C4Ctrl',function($scope,$state,$rootScope,localStorageService){
	$rootScope.$state = $state;
	$scope.eduElements = [
	{id:"Indian Institue of Technology, Guwahati",
	cdesc:"Bachelor of Technology",
	tenure:"July 2011-June 2015",
	image:"ittg.png",
	desc:"<ul><li>ECE Stream</li><li>Projects in area</li><li>took following courses</li></ul>",
	courses:"<a class='project_skill'>{{courseElements[0]}}</a><a class='project_skill'>{{courseElements[1]}}</a><a class='project_skill'>{{courseElements[2]}}</a><a class='project_skill'>{{courseElements[3]}}"}];	

	$scope.courseElements= ['Information Theory','Error codes','VLSI','Blah Blah Blah'];
	$scope.sklElements = [
	{skl:"Bhashyam Junior College",
	 deg:"Intermediate",
	 years:"2009-2011",
	 pnct:"95.8 %"},
	{skl:"Bhashyam Public School",
	deg:"Class X",
	 pnct:"95.8 %",
	 years:"2008-2009",
	 pnct:"91.3 %"}	 
	];
	$scope.acmnts = "<ul><li>Scored</li><li>Topped</li><li>Won</li><li>Done</li><li>Won More</li><li>Did More</li><li>I am GOD</li></ul>"
});


app.controller('C2Ctrl',function($scope,$state,$rootScope,localStorageService){
	//$scope.$sce = $sce;
	$rootScope.$state = $state;
	$scope.clgElements = [
	{id:"Indian Institue of Technology,Guwahati",
	 cdesc:"B.Tech ,Electronics & Communication Engineering",
	 image:'iitg.png' ,
	 tenure:"July 2011 - June 2015", 
	 // Project Headings
	 first_project_header:"<p class='company_project_heading';>Software and Hardware implementation of Power Line Communication <span class='time'>July '14- April '15</span></p>",
	 second_project_header:"<p class='company_project_heading';>Implementation of Re-configurable printed antenna <span class='time'>Jan '14- April '14</span></p>",
	 third_project_header:"<p class='company_project_heading';>Toolbox for drawing leaf outlines<span class='time'>May '14- July '14</span></p>",
	 // Project Description
	 first_project_desc:"<ul><li>As part of my <b><i>Bachelor Thesis,</i></b>I worked on implementing power line communication as an effective tool box for communication purposes</li><li>For software interface, the idea is to establish a power line channel scenario and transmit the data bytes through OFDM transmission model.The software implementation has been done in MATLAB</li><li>Implemented the hardware interface by establishing communication between two computers connected with arduino micro controllers (<i>transmitter</i> and <i>receiver</i>) through power line channel using PLC modems</li><li>Data transmission is achieved by transmitting the serial data using arduino micro controller to the PLC modem at the trasnmitter end  which transmits the data into power line channel and receiving the data by PLC modem at trasnmitter end</li></ul>",
 	second_project_desc:"<ul><li>Implemented tunable micro strip antenna as per the input so that it could be used at multiple input frequencies</li><li>Implemented circuit design in CircuitCam and simulated the circuit using HFSS-9</li><li>Implemented hardware interface by printing an antenna on FR4 epoxy with SMA connectors and used varactors to make the antenna tunable to input frequencies</li></ul>",
  	third_project_desc:"<ul><li>As part of my <b><i>Summer Internship,</i></b> did literature review about shape descriptors and edge detection of images</li><li>Developed an application in MATLAB which enables user to manually select points on the image to form an outline using spline interpolation</li><li>Performed edge detection on leaf images using various edge detectors</li></ul>",
  	// Project Awards
	 first_project_awards:"<a>Poster presentation,</a><a> submitted report paper,</a><a href='Final_Report.pdf' target='_blank'> Detailed documentation here:</a><a class='fa fa-file-pdf-o pdf_file' href='Final_Report.pdf' target='_blank'></a>", 
	 second_project_awards:"<a>Poster presentation,</a><a href='report.pdf' target='_blank'> Detailed documentation here:</a><a class='fa fa-file-pdf-o pdf_file' href='report.pdf' target='_blank'></a>", 
	 // Project Skills
	 first_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[16].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[17].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[18].name}}</a>",
	 second_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[19].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[20].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[18].name}}</a>",
	 third_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[16].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[7].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[21].name}}</a>"}];		
});

app.controller('C5Ctrl',function($scope,$state,$rootScope,localStorageService){
	$rootScope.$state = $state;
	$scope.message  = "IITG";
	$scope.toggle = function () {
      $scope.hide = !$scope.hide;
    };	
});

app.controller('C6Ctrl',function($scope,$state,$rootScope,localStorageService){
	$rootScope.$state = $state;
	$scope.message  = "IITG";
});
