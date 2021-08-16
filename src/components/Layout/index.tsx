import { Layout, Menu } from 'antd'
import { renderRoutes, RouteConfig } from 'react-router-config'
import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from '@ant-design/icons'

interface LayoutProps {
	route: RouteConfig
}

const { Sider, Header, Content } = Layout

const Logo = () => <div />

export const AppLayout: React.FC<LayoutProps> = ({ route }) => (
	<Layout>
		<Sider trigger={null} collapsible collapsed={false}>
			<Logo />
			<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
				<Menu.Item key='1' icon={<UserOutlined />}>
					nav 1
				</Menu.Item>
				<Menu.Item key='2' icon={<VideoCameraOutlined />}>
					nav 2
				</Menu.Item>
				<Menu.Item key='3' icon={<UploadOutlined />}>
					nav 3
				</Menu.Item>
			</Menu>
		</Sider>
		<Layout className='site-layout'>
			<Header className='site-layout-background' style={{ padding: 0 }} />
			<Content
				className='site-layout-background'
				style={{
					margin: '24px 16px',
					padding: 24,
					minHeight: 280,
				}}
			>
				{renderRoutes(route.routes)}
			</Content>
		</Layout>
	</Layout>
)
