import {IApp} from "@app/interfaces";
import ReactDOM from "react-dom/client";
import React from "react";
import {ClientApp} from "@client/app/ClientApp";

export class ClientAppCreator {
	
	constructor(
		private readonly element: HTMLElement | null,
		private readonly app: IApp,
	) {
	}
	
	public init() {
		if(!this.element){
			throw  new Error('Not found root element');
		}
		const root = ReactDOM.createRoot(this.element)
		
		
		root.render(
			React.createElement(ClientApp, {
				app: this.app
			}),
		)
		
	}
}