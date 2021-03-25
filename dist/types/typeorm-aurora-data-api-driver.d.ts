import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';
import { QueryTransformer } from './query-transformer';
declare class DataApiDriver {
    private readonly region;
    private readonly secretArn;
    private readonly resourceArn;
    private readonly database;
    private readonly loggerFn;
    private readonly queryTransformer;
    private readonly serviceConfigOptions?;
    private readonly formatOptions?;
    private readonly client;
    private transactionId?;
    constructor(region: string, secretArn: string, resourceArn: string, database: string, loggerFn: (query: string, parameters?: any[]) => void, queryTransformer: QueryTransformer, serviceConfigOptions?: any, formatOptions?: any);
    query(query: string, parameters?: any[]): Promise<any>;
    preparePersistentValue(value: any, columnMetadata: ColumnMetadata): any;
    prepareHydratedValue(value: any, columnMetadata: ColumnMetadata): any;
    startTransaction(): Promise<void>;
    commitTransaction(): Promise<void>;
    rollbackTransaction(): Promise<void>;
}
declare const createMysqlDriver: (region: string, secretArn: string, resourceArn: string, database: string, loggerFn?: (query: string, parameters?: any[] | undefined) => void, serviceConfigOptions?: any, formatOptions?: any) => DataApiDriver;
export default createMysqlDriver;
export declare const pg: (region: string, secretArn: string, resourceArn: string, database: string, loggerFn?: (query: string, parameters?: any[] | undefined) => void, serviceConfigOptions?: any, formatOptions?: any) => DataApiDriver;
