import {statusCodes} from "@/app/utils/status-codes";

export function handleResponseStatus(response : Response) : string {
    if (response.status >= 500) return 'Сервис недоступен, повторите попытку позже';
    if (response.status >= 200 && response.status < 400) return '';
    return statusCodes[response.status];
}