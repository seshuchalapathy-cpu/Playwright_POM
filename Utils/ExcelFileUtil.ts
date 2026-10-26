import xlsx from "xlsx"
export class ExcelFileUtil{
    public static readExcelData(filePath:string,sheetName:string){
        try {
            const workbook=xlsx.readFile(filePath)
            const sheet=workbook.Sheets[sheetName]
            const jsonData=xlsx.utils.sheet_to_json(sheet)
            return jsonData
            
        } catch (error) {
            console.log(error)
        }
    }
}