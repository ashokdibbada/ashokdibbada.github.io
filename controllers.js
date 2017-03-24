app.controller('MainCtrl',function($scope,$state,$rootScope,localStorageService){
		$rootScope.$state = $state;
		$scope.pageElements = [
		{name:"Overview",selected:false,link:'over_view'},
		{name:"Industry Experience",selected:false,link:'firm_exp'},
		{name:"College Experience",selected:false,link:'clg_exp'},
		{name:"SkillSet",selected:false,link:'skill_set'},
		{name:"Education & Accomplishments",selected:false,link:'education'}
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
		{name:"Text Analytics",selected:false,link:'skill_set'} //15
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
	 first_project_header:"<p class='company_project_heading';>Parts Harmonization</p>",
	 second_project_header:"<p class='company_project_heading';>Video Analytics</p>",
	 third_project_header:"<p class='company_project_heading';>Visualization Portal</p>",
	 // Project Description
	 first_project_desc:"<ul><li>Worked with client</li><li>Wrote code</li><li>Took ownership</li><li>Made Tutorials</li><li>Danced</li></ul>",
 	second_project_desc:"<ul><li>Worked with client</li><li>Wrote code</li><li>Took ownership</li><li>Made Tutorials</li><li>Danced</li></ul>",
  	third_project_desc:"<ul><li>Worked with client</li><li>Wrote code</li><li>Took ownership</li><li>Made Tutorials</li><li>Danced</li></ul>",
  	// Project Awards
	 first_project_awards:"<a href='profile.jpg'>Spot award </a>,<a href='https://www.mu-sigma.com/'>involved in development of computer vision course at org level</a>", 
	 second_project_awards:"<a href='profile.jpg'>Impact award</a>,<a href='https://www.mu-sigma.com/'> presented alogirthm results video demo to CEO & leadership team</a>,<a href='https://www.mu-sigma.com/'> featured in Mu-Sigma Times article</a>", 
	 // Project Skills
	 first_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[1].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[2].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[7].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[6].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[15].name}}</a>",
	 second_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[1].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[7].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[9].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[10].name}}</a> <a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[11].name}}</a> <a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[14].name}}</a>",
	 third_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[0].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[12].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[13].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[3].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[4].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[5].name}}</a>"}];

});
// Skill Set Controller
app.controller('C3Ctrl',function($scope,$state,$rootScope,localStorageService){
	$rootScope.$state = $state;
	$scope.pg_details = "<div>At Mu-Sigma,I worked in Python and designed two desktop applications.In the process,i learned writing pythonic code and packages like cv2, nltk, tKinter, scipy etc.</div>";
	$scope.spec_ext_details = "<ul><li>Description</li><li>Functionalities</li><li>Coded for</li></ul>"
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
	 cdesc:"B.Tech ,Electronics & Communication Enginaaring",
	 image:'iitg.png' ,
	 tenure:"July 2011 - June 2015", 
	 // Project Headings
	 first_project_header:"<p class='company_project_heading';>Parts Harmonization</p>",
	 second_project_header:"<p class='company_project_heading';>Video Analytics</p>",
	 third_project_header:"<p class='company_project_heading';>Visualization Portal</p>",
	 // Project Description
	 first_project_desc:"<ul><li>Worked with client</li><li>Wrote code</li><li>Took ownership</li><li>Made Tutorials</li><li>Danced</li></ul>",
 	second_project_desc:"<ul><li>Worked with client</li><li>Wrote code</li><li>Took ownership</li><li>Made Tutorials</li><li>Danced</li></ul>",
  	third_project_desc:"<ul><li>Worked with client</li><li>Wrote code</li><li>Took ownership</li><li>Made Tutorials</li><li>Danced</li></ul>",
  	// Project Awards
	 first_project_awards:"<a href='profile.jpg'>Spot award </a>,<a href='https://www.mu-sigma.com/'>involved in development of computer vision course at org level</a>", 
	 second_project_awards:"<a href='profile.jpg'>Impact award</a>,<a href='https://www.mu-sigma.com/'>presented alogirthm results video demo to CEO & leadership team</a>", 
	 // Project Skills
	 first_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[1].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[2].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[7].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[6].name}}</a>",
	 second_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[1].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[7].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[9].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[10].name}}</a> <a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[11].name}}</a> <a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[14].name}}</a>",
	 third_project_skills:"<a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[0].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[12].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[13].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[3].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[4].name}}</a><a class='project_skill' ng-click='stateGo(skillElements[0])' >{{skillElements[5].name}}</a>"}];		
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
