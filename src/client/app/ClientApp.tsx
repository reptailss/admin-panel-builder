import React from 'react';
import {IApp} from "@app/interfaces";
import {BrowserRouter} from "react-router-dom";
import {ClientRoutes} from "@client/routes/ClientRoutes";
import CssBaseline from "@mui/material/CssBaseline";
import {ClientAppProvider} from "@client/app/context/ClientAppProvider";
import {ClientAuth} from "@client/auth/ClientAuth";
import {ClientAuthProvider} from "@client/auth/context/ClientAuthProvider";
import './app.css'
import {SnackBar} from "@client/snackBar/SnackBar";
import {RootLayoutView} from "@client/layouts/rootLayout/RootLayoutView";
import {ClientHeader} from "@client/layouts/header/ClientHeader";
import {ClientSidebar} from "@client/layouts/sidebar/ClientSidebar";
import {ClientAccess} from "@client/access/ClientAccess";
import {ClientAccessProvider} from "@client/access/context/ClientAccessProvider";

export const ClientApp = ({
							  app
						  }: {
	app: IApp
}) => {
	
	return (
		<ClientAppProvider
			app={app}
		>
			<CssBaseline/>
			<SnackBar/>
			
			<ClientAuthProvider>
				<ClientAccessProvider>
					<BrowserRouter>
						<ClientAuth>
							<ClientAccess>
								<RootLayoutView
									header={<ClientHeader/>}
									sidebar={<ClientSidebar/>}
								>
									<ClientRoutes/>
								</RootLayoutView>
							</ClientAccess>
						</ClientAuth>
					</BrowserRouter>
				</ClientAccessProvider>
			</ClientAuthProvider>
		
		
		</ClientAppProvider>
	);
};

