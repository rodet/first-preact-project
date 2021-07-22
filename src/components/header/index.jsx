import { Link } from 'preact-router/match';
//import style from './style.css';

import {
	Header,
	HeaderContainer,
	HeaderName,
	HeaderNavigation,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderGlobalBar,
	HeaderGlobalAction,
	SkipToContent,
	SideNav,
	SideNavItems,
	HeaderSideNavItems,
} from 'carbon-components-react';

const TutorialHeader = () => (
	<HeaderContainer
		render={({ isSideNavExpanded, onClickSideNavExpand }) => (
			<Header aria-label="Carbon Tutorial">
				<SkipToContent />
				<HeaderMenuButton
					aria-label="Open menu"
					onClick={onClickSideNavExpand}
					isActive={isSideNavExpanded}
				/>
				<HeaderName href="/" prefix="IBM">
					Carbon Tutorial
				</HeaderName>
				<HeaderNavigation aria-label="Carbon Tutorial">
					<HeaderMenuItem href="/profile">Me</HeaderMenuItem>
					<HeaderMenuItem href="/profile/john">John</HeaderMenuItem>
				</HeaderNavigation>
				<SideNav
					aria-label="Side navigation"
					expanded={isSideNavExpanded}
					isPersistent={false}>
					<SideNavItems>
						<HeaderSideNavItems>
							<HeaderMenuItem href="/profile">Me</HeaderMenuItem>
							<HeaderMenuItem href="/profile/john">John</HeaderMenuItem>
						</HeaderSideNavItems>
					</SideNavItems>
				</SideNav>
				<HeaderGlobalBar />
			</Header>
		)}
	/>
);

export default TutorialHeader;


// const Header = () => (
// 	<header class={style.header}>
// 		<h1>Preact App</h1>
// 		<nav>
// 			<Link activeClassName={style.active} href="/">Home</Link>
// 			<Link activeClassName={style.active} href="/profile">Me</Link>
// 			<Link activeClassName={style.active} href="/profile/john">John</Link>
// 		</nav>
// 	</header>
// );

// export default Header;
