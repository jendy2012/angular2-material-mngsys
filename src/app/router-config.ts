import { HomeComponent } from './home/home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { PermissionManagementComponent } from './permission-management/permission-management.component';

export const routerConfig=[
	{
		path:'',
		component:HomeComponent
	},{
		path:'home',
		component:HomeComponent
	},{
		path:'usermng',
		component:UserManagementComponent
	},{
		path:'rolemng',
		component:RoleManagementComponent
	},{
		path:'permissionmng',
		component:PermissionManagementComponent
	},{
		path:'**',//fallback router must in the last
		component:HomeComponent
	}
];