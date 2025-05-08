export const statusCodes : StatusCodesMessages  = {
    400 : 'Некорректный запрос, повторите попытку',
    403 : 'Доступ запрещен',
    404 : 'Ресурс не найден, повторите попытку позже',
    429 : 'Слишком много запросов, повторите позже',
};

interface StatusCodesMessages{
    [key : number]: string;
}