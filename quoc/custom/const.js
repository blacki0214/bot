module.exports = {
	DEBUG : false,

	//FACEBOOK TOKEN
	FB_APP_SECRET : '1fa30f741d0d327d8c298379a9a1c919',
	FB_PAGE_VERIFY_TOKEN : '123456', // đặt 1 mã bất kỳ
	FB_PAGE_ACCESS_TOKEN : 'EAAq8dOVmwfoBADZCFPwAhGj3e0xNvI5VmMWjmINKl9YwjOG1VSUxJ3fkryyjYPTDm2rWJh5qs3BnXWDDDzB4JP8XNZCZC8t8EzperKp1wvDSzTZABWIGUN5WW2Ecr4VGOjLdus7mpzUodscV5YA8TU1a29tK2tqsh9bD79KPvv8803mOxHLe',

	//HEROKU STUFFS
	APP_NAME : 'quoc',
	HEROKU_API_KEY : '300d91d3-25e3-42b5-bcab-697f8d0c3841',
	KEEP_APP_ALWAYS_ON : false, // đổi thành true nếu đã thêm credit card vào heroku

	//MONGODB SETUP
	DB_CONFIG_URI : 'mongodb+srv://quoc1108:<Quoc11082004@>@cluster0.tycnw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

	//ANALYTICS
	HAS_POST_LOG : false,
	POST_LOG_ID : '',
	POST_LOG_ENTRY1 : '',
	POST_LOG_ENTRY2 : '',

	//GOOGLE FORMS
	REPORT_LINK : "https://forms.gle/91VESvxABQzFx68A8",

	//OTHERS
	//(không bắt buộc) Cách bật tính năng hiện đã xem (seen): https://goo.gl/xjw9nP
	MAX_PEOPLE_WAITROOM : 100, //Số người tối đa trong phòng chờ
	MAX_WAIT_TIME_MINUTES : 0, //Số phút tối đa 1 người đc phép trong phòng chờ.
	                            //Đặt 0 để cho phép đợi bao lâu cũng đc

	//ADMIN UI
	ADMIN_PASSWORD : "backtracking" //password để login vào trang admin
};
