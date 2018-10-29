import { Injectable } from '@angular/core';

import { Response } from '@angular/http';

import { MessageService } from 'primeng/components/common/api';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {

    constructor(private messageService: MessageService) { }

    handle(response: any) {
        let msg: string;

        if (typeof response === 'string') {
            msg = response;

        } else if (response instanceof Response
            && response.status >= 400 && response.status <= 499) {
            let errors;
            msg = 'Error processing request';

            try {
                errors = response.json();

                msg = errors[0].userMessage;
            } catch (e) { }

            console.error('An error has ocurred', response);

        } else {
            msg = 'Error processing service. Try again.';
            console.error('An error has ocurred', response);
        }

        this.messageService.add({ severity: 'error', detail: msg });
    }
}