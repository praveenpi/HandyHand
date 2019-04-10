import { observable, action, decorate, computed } from 'mobx';

class DataStore {
	session = {
		username: ''
	};

	cust_details = {
		customerID: '',
		username: '',
		name: '',
		password: '',
		email: '',
		phone: ''
	};

	handy_details = {
		handyID: '',
		username: '',
		name: '',
		password: '',
		service: '',
		experience: '',
		email: '',
		phone: ''
	};

	order_details = {
		orderID: '',
		customerID: '',
		handyID: '',
		cname: '',
		hname: '',
		service: '',
		serviceInfo: '',		
		region: '',
		phone: '',
		date:''
	};
	//updating username for session.
	updateUser(username) {
		this.session.username = username;
	}

	//updating customer details.
	updateCID(customerID) {
		this.cust_details.customerID = customerID;
	}
	updateCUser(username) {
		this.cust_details.username = username;
	}
	updateCName(name) {
		this.cust_details.name = name;
	}
	updateCPass(password) {
		this.cust_details.password = password;
	}
	updateCEmail(email) {
		this.cust_details.email = email;
	}
	updateCPhone(phone) {
		this.cust_details.phone = phone;
	}

	//updating handyman details.
	updateHID(handyID) {
		this.handy_details.handyID = handyID;
	}
	updateHUser(username) {
		this.handy_details.username = username;
	}
	updateHName(name) {
		this.handy_details.name = name;
	}
	updateHPass(password) {
		this.handy_details.password = password;
	}
	updateHEmail(email) {
		this.handy_details.email = email;
	}
	updateHPhone(phone) {
		this.handy_details.phone = phone;
	}
	updateHService(service) {
		this.handy_details.service = service;
	}
	updateHExp(experience) {
		this.handy_details.experience = experience;
	}

	//updating order details.
	updateOrderID(orderID) {
		this.order_details.orderID = orderID;
	}
	updateOCID(customerID) {
		this.order_details.customerID = customerID;
	}
	updateOCName(cname) {
		this.order_details.cname = cname;
	}
	updateOHName(hname) {
		this.order_details.hname = hname;
	}
	updateHOID(handyID) {
		this.order_details.handyID = handyID;
	}
	updateOService(service) {
		this.order_details.service = service;
	}
	updateSerInfo(serviceInfo) {
		this.order_details.serviceInfo = serviceInfo;
	}
	updateDate(date) {
		this.order_details.date = date;
	}
	
	updateRegion(region) {
		this.order_details.region = region;
	}

	updateOPhone(phone) {
		this.order_details.phone = phone;
	}
}

decorate(DataStore, {
	session: observable,
	updateUser: action,
	updateCUser: action,
	updateCName: action,
	updateCEmail: action,
	updateCPhone: action,
	updateCPass: action,

	updateHUser: action,
	updateHName: action,
	updateHEmail: action,
	updateHPhone: action,
	updateHPass: action,
	updateHExp: action,
	updateHService: action,

	updateCOID: action,
	updateHOID: action,
	updateRegion: action,
	updateOCName: action,
	updateOHName: action,
	updateOPhone: action,
	updateOService: action,
	updateSerInfo: action,
	updateOrderID: action,
	updateDate:action
});

export default new DataStore();
