
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model OrganizationMembership
 * 
 */
export type OrganizationMembership = $Result.DefaultSelection<Prisma.$OrganizationMembershipPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrganizationProfile
 * 
 */
export type OrganizationProfile = $Result.DefaultSelection<Prisma.$OrganizationProfilePayload>
/**
 * Model QrScanner
 * 
 */
export type QrScanner = $Result.DefaultSelection<Prisma.$QrScannerPayload>
/**
 * Model OrganizationInvitation
 * 
 */
export type OrganizationInvitation = $Result.DefaultSelection<Prisma.$OrganizationInvitationPayload>
/**
 * Model SystemTeamMember
 * 
 */
export type SystemTeamMember = $Result.DefaultSelection<Prisma.$SystemTeamMemberPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SystemRole: {
  system_team: 'system_team'
};

export type SystemRole = (typeof SystemRole)[keyof typeof SystemRole]


export const OrganizationRole: {
  admin: 'admin',
  member: 'member'
};

export type OrganizationRole = (typeof OrganizationRole)[keyof typeof OrganizationRole]

}

export type SystemRole = $Enums.SystemRole

export const SystemRole: typeof $Enums.SystemRole

export type OrganizationRole = $Enums.OrganizationRole

export const OrganizationRole: typeof $Enums.OrganizationRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationMembership`: Exposes CRUD operations for the **OrganizationMembership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationMemberships
    * const organizationMemberships = await prisma.organizationMembership.findMany()
    * ```
    */
  get organizationMembership(): Prisma.OrganizationMembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationProfile`: Exposes CRUD operations for the **OrganizationProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationProfiles
    * const organizationProfiles = await prisma.organizationProfile.findMany()
    * ```
    */
  get organizationProfile(): Prisma.OrganizationProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qrScanner`: Exposes CRUD operations for the **QrScanner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QrScanners
    * const qrScanners = await prisma.qrScanner.findMany()
    * ```
    */
  get qrScanner(): Prisma.QrScannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationInvitation`: Exposes CRUD operations for the **OrganizationInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationInvitations
    * const organizationInvitations = await prisma.organizationInvitation.findMany()
    * ```
    */
  get organizationInvitation(): Prisma.OrganizationInvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemTeamMember`: Exposes CRUD operations for the **SystemTeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemTeamMembers
    * const systemTeamMembers = await prisma.systemTeamMember.findMany()
    * ```
    */
  get systemTeamMember(): Prisma.SystemTeamMemberDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    OrganizationMembership: 'OrganizationMembership',
    Organization: 'Organization',
    OrganizationProfile: 'OrganizationProfile',
    QrScanner: 'QrScanner',
    OrganizationInvitation: 'OrganizationInvitation',
    SystemTeamMember: 'SystemTeamMember'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "organizationMembership" | "organization" | "organizationProfile" | "qrScanner" | "organizationInvitation" | "systemTeamMember"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      OrganizationMembership: {
        payload: Prisma.$OrganizationMembershipPayload<ExtArgs>
        fields: Prisma.OrganizationMembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationMembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationMembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          findFirst: {
            args: Prisma.OrganizationMembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationMembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          findMany: {
            args: Prisma.OrganizationMembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>[]
          }
          create: {
            args: Prisma.OrganizationMembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          createMany: {
            args: Prisma.OrganizationMembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationMembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>[]
          }
          delete: {
            args: Prisma.OrganizationMembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          update: {
            args: Prisma.OrganizationMembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationMembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationMembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationMembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationMembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          aggregate: {
            args: Prisma.OrganizationMembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationMembership>
          }
          groupBy: {
            args: Prisma.OrganizationMembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationMembershipCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMembershipCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrganizationProfile: {
        payload: Prisma.$OrganizationProfilePayload<ExtArgs>
        fields: Prisma.OrganizationProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          findFirst: {
            args: Prisma.OrganizationProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          findMany: {
            args: Prisma.OrganizationProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>[]
          }
          create: {
            args: Prisma.OrganizationProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          createMany: {
            args: Prisma.OrganizationProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>[]
          }
          delete: {
            args: Prisma.OrganizationProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          update: {
            args: Prisma.OrganizationProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          deleteMany: {
            args: Prisma.OrganizationProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>[]
          }
          upsert: {
            args: Prisma.OrganizationProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          aggregate: {
            args: Prisma.OrganizationProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationProfile>
          }
          groupBy: {
            args: Prisma.OrganizationProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationProfileCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationProfileCountAggregateOutputType> | number
          }
        }
      }
      QrScanner: {
        payload: Prisma.$QrScannerPayload<ExtArgs>
        fields: Prisma.QrScannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QrScannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrScannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QrScannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrScannerPayload>
          }
          findFirst: {
            args: Prisma.QrScannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrScannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QrScannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrScannerPayload>
          }
          findMany: {
            args: Prisma.QrScannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrScannerPayload>[]
          }
          create: {
            args: Prisma.QrScannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrScannerPayload>
          }
          createMany: {
            args: Prisma.QrScannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QrScannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrScannerPayload>[]
          }
          delete: {
            args: Prisma.QrScannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrScannerPayload>
          }
          update: {
            args: Prisma.QrScannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrScannerPayload>
          }
          deleteMany: {
            args: Prisma.QrScannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QrScannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QrScannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrScannerPayload>[]
          }
          upsert: {
            args: Prisma.QrScannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrScannerPayload>
          }
          aggregate: {
            args: Prisma.QrScannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQrScanner>
          }
          groupBy: {
            args: Prisma.QrScannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<QrScannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.QrScannerCountArgs<ExtArgs>
            result: $Utils.Optional<QrScannerCountAggregateOutputType> | number
          }
        }
      }
      OrganizationInvitation: {
        payload: Prisma.$OrganizationInvitationPayload<ExtArgs>
        fields: Prisma.OrganizationInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>
          }
          findMany: {
            args: Prisma.OrganizationInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>[]
          }
          create: {
            args: Prisma.OrganizationInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>
          }
          createMany: {
            args: Prisma.OrganizationInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>
          }
          update: {
            args: Prisma.OrganizationInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationInvitation>
          }
          groupBy: {
            args: Prisma.OrganizationInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationInvitationCountAggregateOutputType> | number
          }
        }
      }
      SystemTeamMember: {
        payload: Prisma.$SystemTeamMemberPayload<ExtArgs>
        fields: Prisma.SystemTeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemTeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemTeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemTeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemTeamMemberPayload>
          }
          findFirst: {
            args: Prisma.SystemTeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemTeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemTeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemTeamMemberPayload>
          }
          findMany: {
            args: Prisma.SystemTeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemTeamMemberPayload>[]
          }
          create: {
            args: Prisma.SystemTeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemTeamMemberPayload>
          }
          createMany: {
            args: Prisma.SystemTeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemTeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemTeamMemberPayload>[]
          }
          delete: {
            args: Prisma.SystemTeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemTeamMemberPayload>
          }
          update: {
            args: Prisma.SystemTeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemTeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.SystemTeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemTeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemTeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemTeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.SystemTeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemTeamMemberPayload>
          }
          aggregate: {
            args: Prisma.SystemTeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemTeamMember>
          }
          groupBy: {
            args: Prisma.SystemTeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemTeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemTeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<SystemTeamMemberCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    organizationMembership?: OrganizationMembershipOmit
    organization?: OrganizationOmit
    organizationProfile?: OrganizationProfileOmit
    qrScanner?: QrScannerOmit
    organizationInvitation?: OrganizationInvitationOmit
    systemTeamMember?: SystemTeamMemberOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    memberships: number
    profiles: number
    sentInvitations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    profiles?: boolean | UserCountOutputTypeCountProfilesArgs
    sentInvitations?: boolean | UserCountOutputTypeCountSentInvitationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationInvitationWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    memberships: number
    qrScanners: number
    profiles: number
    invitations: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | OrganizationCountOutputTypeCountMembershipsArgs
    qrScanners?: boolean | OrganizationCountOutputTypeCountQrScannersArgs
    profiles?: boolean | OrganizationCountOutputTypeCountProfilesArgs
    invitations?: boolean | OrganizationCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMembershipWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountQrScannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QrScannerWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationProfileWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationInvitationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    organizationId: string | null
    systemRole: $Enums.SystemRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    organizationId: string | null
    systemRole: $Enums.SystemRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    firstName: number
    lastName: number
    organizationId: number
    roles: number
    systemRole: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    organizationId?: true
    systemRole?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    organizationId?: true
    systemRole?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    organizationId?: true
    roles?: true
    systemRole?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    firstName: string | null
    lastName: string | null
    organizationId: string | null
    roles: string[]
    systemRole: $Enums.SystemRole | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    organizationId?: boolean
    roles?: boolean
    systemRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    sentInvitations?: boolean | User$sentInvitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    organizationId?: boolean
    roles?: boolean
    systemRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    organizationId?: boolean
    roles?: boolean
    systemRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    organizationId?: boolean
    roles?: boolean
    systemRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "firstName" | "lastName" | "organizationId" | "roles" | "systemRole" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    sentInvitations?: boolean | User$sentInvitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      memberships: Prisma.$OrganizationMembershipPayload<ExtArgs>[]
      profiles: Prisma.$OrganizationProfilePayload<ExtArgs>[]
      sentInvitations: Prisma.$OrganizationInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      firstName: string | null
      lastName: string | null
      organizationId: string | null
      roles: string[]
      systemRole: $Enums.SystemRole | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profiles<T extends User$profilesArgs<ExtArgs> = {}>(args?: Subset<T, User$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentInvitations<T extends User$sentInvitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly roles: FieldRef<"User", 'String[]'>
    readonly systemRole: FieldRef<"User", 'SystemRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    where?: OrganizationMembershipWhereInput
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    cursor?: OrganizationMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMembershipScalarFieldEnum | OrganizationMembershipScalarFieldEnum[]
  }

  /**
   * User.profiles
   */
  export type User$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    where?: OrganizationProfileWhereInput
    orderBy?: OrganizationProfileOrderByWithRelationInput | OrganizationProfileOrderByWithRelationInput[]
    cursor?: OrganizationProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationProfileScalarFieldEnum | OrganizationProfileScalarFieldEnum[]
  }

  /**
   * User.sentInvitations
   */
  export type User$sentInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
    where?: OrganizationInvitationWhereInput
    orderBy?: OrganizationInvitationOrderByWithRelationInput | OrganizationInvitationOrderByWithRelationInput[]
    cursor?: OrganizationInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationInvitationScalarFieldEnum | OrganizationInvitationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationMembership
   */

  export type AggregateOrganizationMembership = {
    _count: OrganizationMembershipCountAggregateOutputType | null
    _min: OrganizationMembershipMinAggregateOutputType | null
    _max: OrganizationMembershipMaxAggregateOutputType | null
  }

  export type OrganizationMembershipMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    role: $Enums.OrganizationRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMembershipMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    role: $Enums.OrganizationRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMembershipCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMembershipMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMembershipMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMembershipCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationMembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMembership to aggregate.
     */
    where?: OrganizationMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMemberships to fetch.
     */
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationMemberships
    **/
    _count?: true | OrganizationMembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMembershipMaxAggregateInputType
  }

  export type GetOrganizationMembershipAggregateType<T extends OrganizationMembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMembership[P]>
      : GetScalarType<T[P], AggregateOrganizationMembership[P]>
  }




  export type OrganizationMembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMembershipWhereInput
    orderBy?: OrganizationMembershipOrderByWithAggregationInput | OrganizationMembershipOrderByWithAggregationInput[]
    by: OrganizationMembershipScalarFieldEnum[] | OrganizationMembershipScalarFieldEnum
    having?: OrganizationMembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationMembershipCountAggregateInputType | true
    _min?: OrganizationMembershipMinAggregateInputType
    _max?: OrganizationMembershipMaxAggregateInputType
  }

  export type OrganizationMembershipGroupByOutputType = {
    id: string
    userId: string
    organizationId: string
    role: $Enums.OrganizationRole
    createdAt: Date
    updatedAt: Date
    _count: OrganizationMembershipCountAggregateOutputType | null
    _min: OrganizationMembershipMinAggregateOutputType | null
    _max: OrganizationMembershipMaxAggregateOutputType | null
  }

  type GetOrganizationMembershipGroupByPayload<T extends OrganizationMembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationMembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationMembershipGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationMembershipGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationMembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMembership"]>

  export type OrganizationMembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMembership"]>

  export type OrganizationMembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMembership"]>

  export type OrganizationMembershipSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationMembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["organizationMembership"]>
  export type OrganizationMembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationMembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationMembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrganizationMembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationMembership"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string
      role: $Enums.OrganizationRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organizationMembership"]>
    composites: {}
  }

  type OrganizationMembershipGetPayload<S extends boolean | null | undefined | OrganizationMembershipDefaultArgs> = $Result.GetResult<Prisma.$OrganizationMembershipPayload, S>

  type OrganizationMembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationMembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationMembershipCountAggregateInputType | true
    }

  export interface OrganizationMembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMembership'], meta: { name: 'OrganizationMembership' } }
    /**
     * Find zero or one OrganizationMembership that matches the filter.
     * @param {OrganizationMembershipFindUniqueArgs} args - Arguments to find a OrganizationMembership
     * @example
     * // Get one OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMembershipFindUniqueArgs>(args: SelectSubset<T, OrganizationMembershipFindUniqueArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationMembership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationMembershipFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMembership
     * @example
     * // Get one OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipFindFirstArgs} args - Arguments to find a OrganizationMembership
     * @example
     * // Get one OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMembershipFindFirstArgs>(args?: SelectSubset<T, OrganizationMembershipFindFirstArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMembership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipFindFirstOrThrowArgs} args - Arguments to find a OrganizationMembership
     * @example
     * // Get one OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMemberships
     * const organizationMemberships = await prisma.organizationMembership.findMany()
     * 
     * // Get first 10 OrganizationMemberships
     * const organizationMemberships = await prisma.organizationMembership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationMembershipWithIdOnly = await prisma.organizationMembership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationMembershipFindManyArgs>(args?: SelectSubset<T, OrganizationMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationMembership.
     * @param {OrganizationMembershipCreateArgs} args - Arguments to create a OrganizationMembership.
     * @example
     * // Create one OrganizationMembership
     * const OrganizationMembership = await prisma.organizationMembership.create({
     *   data: {
     *     // ... data to create a OrganizationMembership
     *   }
     * })
     * 
     */
    create<T extends OrganizationMembershipCreateArgs>(args: SelectSubset<T, OrganizationMembershipCreateArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationMemberships.
     * @param {OrganizationMembershipCreateManyArgs} args - Arguments to create many OrganizationMemberships.
     * @example
     * // Create many OrganizationMemberships
     * const organizationMembership = await prisma.organizationMembership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationMembershipCreateManyArgs>(args?: SelectSubset<T, OrganizationMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationMemberships and returns the data saved in the database.
     * @param {OrganizationMembershipCreateManyAndReturnArgs} args - Arguments to create many OrganizationMemberships.
     * @example
     * // Create many OrganizationMemberships
     * const organizationMembership = await prisma.organizationMembership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationMemberships and only return the `id`
     * const organizationMembershipWithIdOnly = await prisma.organizationMembership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationMembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationMembership.
     * @param {OrganizationMembershipDeleteArgs} args - Arguments to delete one OrganizationMembership.
     * @example
     * // Delete one OrganizationMembership
     * const OrganizationMembership = await prisma.organizationMembership.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMembership
     *   }
     * })
     * 
     */
    delete<T extends OrganizationMembershipDeleteArgs>(args: SelectSubset<T, OrganizationMembershipDeleteArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationMembership.
     * @param {OrganizationMembershipUpdateArgs} args - Arguments to update one OrganizationMembership.
     * @example
     * // Update one OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationMembershipUpdateArgs>(args: SelectSubset<T, OrganizationMembershipUpdateArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationMemberships.
     * @param {OrganizationMembershipDeleteManyArgs} args - Arguments to filter OrganizationMemberships to delete.
     * @example
     * // Delete a few OrganizationMemberships
     * const { count } = await prisma.organizationMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationMembershipDeleteManyArgs>(args?: SelectSubset<T, OrganizationMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMemberships
     * const organizationMembership = await prisma.organizationMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationMembershipUpdateManyArgs>(args: SelectSubset<T, OrganizationMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMemberships and returns the data updated in the database.
     * @param {OrganizationMembershipUpdateManyAndReturnArgs} args - Arguments to update many OrganizationMemberships.
     * @example
     * // Update many OrganizationMemberships
     * const organizationMembership = await prisma.organizationMembership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationMemberships and only return the `id`
     * const organizationMembershipWithIdOnly = await prisma.organizationMembership.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationMembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationMembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationMembership.
     * @param {OrganizationMembershipUpsertArgs} args - Arguments to update or create a OrganizationMembership.
     * @example
     * // Update or create a OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.upsert({
     *   create: {
     *     // ... data to create a OrganizationMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMembership we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMembershipUpsertArgs>(args: SelectSubset<T, OrganizationMembershipUpsertArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipCountArgs} args - Arguments to filter OrganizationMemberships to count.
     * @example
     * // Count the number of OrganizationMemberships
     * const count = await prisma.organizationMembership.count({
     *   where: {
     *     // ... the filter for the OrganizationMemberships we want to count
     *   }
     * })
    **/
    count<T extends OrganizationMembershipCountArgs>(
      args?: Subset<T, OrganizationMembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationMembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationMembershipAggregateArgs>(args: Subset<T, OrganizationMembershipAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMembershipAggregateType<T>>

    /**
     * Group by OrganizationMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationMembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMembershipGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationMembership model
   */
  readonly fields: OrganizationMembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMembership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationMembership model
   */
  interface OrganizationMembershipFieldRefs {
    readonly id: FieldRef<"OrganizationMembership", 'String'>
    readonly userId: FieldRef<"OrganizationMembership", 'String'>
    readonly organizationId: FieldRef<"OrganizationMembership", 'String'>
    readonly role: FieldRef<"OrganizationMembership", 'OrganizationRole'>
    readonly createdAt: FieldRef<"OrganizationMembership", 'DateTime'>
    readonly updatedAt: FieldRef<"OrganizationMembership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationMembership findUnique
   */
  export type OrganizationMembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembership to fetch.
     */
    where: OrganizationMembershipWhereUniqueInput
  }

  /**
   * OrganizationMembership findUniqueOrThrow
   */
  export type OrganizationMembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembership to fetch.
     */
    where: OrganizationMembershipWhereUniqueInput
  }

  /**
   * OrganizationMembership findFirst
   */
  export type OrganizationMembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembership to fetch.
     */
    where?: OrganizationMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMemberships to fetch.
     */
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMemberships.
     */
    cursor?: OrganizationMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMemberships.
     */
    distinct?: OrganizationMembershipScalarFieldEnum | OrganizationMembershipScalarFieldEnum[]
  }

  /**
   * OrganizationMembership findFirstOrThrow
   */
  export type OrganizationMembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembership to fetch.
     */
    where?: OrganizationMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMemberships to fetch.
     */
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMemberships.
     */
    cursor?: OrganizationMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMemberships.
     */
    distinct?: OrganizationMembershipScalarFieldEnum | OrganizationMembershipScalarFieldEnum[]
  }

  /**
   * OrganizationMembership findMany
   */
  export type OrganizationMembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMemberships to fetch.
     */
    where?: OrganizationMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMemberships to fetch.
     */
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationMemberships.
     */
    cursor?: OrganizationMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMemberships.
     */
    skip?: number
    distinct?: OrganizationMembershipScalarFieldEnum | OrganizationMembershipScalarFieldEnum[]
  }

  /**
   * OrganizationMembership create
   */
  export type OrganizationMembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationMembership.
     */
    data: XOR<OrganizationMembershipCreateInput, OrganizationMembershipUncheckedCreateInput>
  }

  /**
   * OrganizationMembership createMany
   */
  export type OrganizationMembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationMemberships.
     */
    data: OrganizationMembershipCreateManyInput | OrganizationMembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationMembership createManyAndReturn
   */
  export type OrganizationMembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationMemberships.
     */
    data: OrganizationMembershipCreateManyInput | OrganizationMembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMembership update
   */
  export type OrganizationMembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationMembership.
     */
    data: XOR<OrganizationMembershipUpdateInput, OrganizationMembershipUncheckedUpdateInput>
    /**
     * Choose, which OrganizationMembership to update.
     */
    where: OrganizationMembershipWhereUniqueInput
  }

  /**
   * OrganizationMembership updateMany
   */
  export type OrganizationMembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationMemberships.
     */
    data: XOR<OrganizationMembershipUpdateManyMutationInput, OrganizationMembershipUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMemberships to update
     */
    where?: OrganizationMembershipWhereInput
    /**
     * Limit how many OrganizationMemberships to update.
     */
    limit?: number
  }

  /**
   * OrganizationMembership updateManyAndReturn
   */
  export type OrganizationMembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationMemberships.
     */
    data: XOR<OrganizationMembershipUpdateManyMutationInput, OrganizationMembershipUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMemberships to update
     */
    where?: OrganizationMembershipWhereInput
    /**
     * Limit how many OrganizationMemberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMembership upsert
   */
  export type OrganizationMembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationMembership to update in case it exists.
     */
    where: OrganizationMembershipWhereUniqueInput
    /**
     * In case the OrganizationMembership found by the `where` argument doesn't exist, create a new OrganizationMembership with this data.
     */
    create: XOR<OrganizationMembershipCreateInput, OrganizationMembershipUncheckedCreateInput>
    /**
     * In case the OrganizationMembership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationMembershipUpdateInput, OrganizationMembershipUncheckedUpdateInput>
  }

  /**
   * OrganizationMembership delete
   */
  export type OrganizationMembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter which OrganizationMembership to delete.
     */
    where: OrganizationMembershipWhereUniqueInput
  }

  /**
   * OrganizationMembership deleteMany
   */
  export type OrganizationMembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMemberships to delete
     */
    where?: OrganizationMembershipWhereInput
    /**
     * Limit how many OrganizationMemberships to delete.
     */
    limit?: number
  }

  /**
   * OrganizationMembership without action
   */
  export type OrganizationMembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    managerName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    managerName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    address: number
    managerName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    managerName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    managerName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    managerName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    address: string | null
    managerName: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    managerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberships?: boolean | Organization$membershipsArgs<ExtArgs>
    qrScanners?: boolean | Organization$qrScannersArgs<ExtArgs>
    profiles?: boolean | Organization$profilesArgs<ExtArgs>
    invitations?: boolean | Organization$invitationsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    managerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    managerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    managerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "managerName" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | Organization$membershipsArgs<ExtArgs>
    qrScanners?: boolean | Organization$qrScannersArgs<ExtArgs>
    profiles?: boolean | Organization$profilesArgs<ExtArgs>
    invitations?: boolean | Organization$invitationsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      memberships: Prisma.$OrganizationMembershipPayload<ExtArgs>[]
      qrScanners: Prisma.$QrScannerPayload<ExtArgs>[]
      profiles: Prisma.$OrganizationProfilePayload<ExtArgs>[]
      invitations: Prisma.$OrganizationInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      managerName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends Organization$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qrScanners<T extends Organization$qrScannersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$qrScannersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profiles<T extends Organization$profilesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends Organization$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly address: FieldRef<"Organization", 'String'>
    readonly managerName: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.memberships
   */
  export type Organization$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    where?: OrganizationMembershipWhereInput
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    cursor?: OrganizationMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMembershipScalarFieldEnum | OrganizationMembershipScalarFieldEnum[]
  }

  /**
   * Organization.qrScanners
   */
  export type Organization$qrScannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerInclude<ExtArgs> | null
    where?: QrScannerWhereInput
    orderBy?: QrScannerOrderByWithRelationInput | QrScannerOrderByWithRelationInput[]
    cursor?: QrScannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QrScannerScalarFieldEnum | QrScannerScalarFieldEnum[]
  }

  /**
   * Organization.profiles
   */
  export type Organization$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    where?: OrganizationProfileWhereInput
    orderBy?: OrganizationProfileOrderByWithRelationInput | OrganizationProfileOrderByWithRelationInput[]
    cursor?: OrganizationProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationProfileScalarFieldEnum | OrganizationProfileScalarFieldEnum[]
  }

  /**
   * Organization.invitations
   */
  export type Organization$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
    where?: OrganizationInvitationWhereInput
    orderBy?: OrganizationInvitationOrderByWithRelationInput | OrganizationInvitationOrderByWithRelationInput[]
    cursor?: OrganizationInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationInvitationScalarFieldEnum | OrganizationInvitationScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationProfile
   */

  export type AggregateOrganizationProfile = {
    _count: OrganizationProfileCountAggregateOutputType | null
    _min: OrganizationProfileMinAggregateOutputType | null
    _max: OrganizationProfileMaxAggregateOutputType | null
  }

  export type OrganizationProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    displayName: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    displayName: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationProfileCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    displayName: number
    department: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationProfileMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    displayName?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    displayName?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationProfileCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    displayName?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationProfile to aggregate.
     */
    where?: OrganizationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationProfiles to fetch.
     */
    orderBy?: OrganizationProfileOrderByWithRelationInput | OrganizationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationProfiles
    **/
    _count?: true | OrganizationProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationProfileMaxAggregateInputType
  }

  export type GetOrganizationProfileAggregateType<T extends OrganizationProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationProfile[P]>
      : GetScalarType<T[P], AggregateOrganizationProfile[P]>
  }




  export type OrganizationProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationProfileWhereInput
    orderBy?: OrganizationProfileOrderByWithAggregationInput | OrganizationProfileOrderByWithAggregationInput[]
    by: OrganizationProfileScalarFieldEnum[] | OrganizationProfileScalarFieldEnum
    having?: OrganizationProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationProfileCountAggregateInputType | true
    _min?: OrganizationProfileMinAggregateInputType
    _max?: OrganizationProfileMaxAggregateInputType
  }

  export type OrganizationProfileGroupByOutputType = {
    id: string
    userId: string
    organizationId: string
    displayName: string | null
    department: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationProfileCountAggregateOutputType | null
    _min: OrganizationProfileMinAggregateOutputType | null
    _max: OrganizationProfileMaxAggregateOutputType | null
  }

  type GetOrganizationProfileGroupByPayload<T extends OrganizationProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationProfileGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationProfileGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    displayName?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationProfile"]>

  export type OrganizationProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    displayName?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationProfile"]>

  export type OrganizationProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    displayName?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationProfile"]>

  export type OrganizationProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    displayName?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "displayName" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["organizationProfile"]>
  export type OrganizationProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrganizationProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string
      displayName: string | null
      department: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organizationProfile"]>
    composites: {}
  }

  type OrganizationProfileGetPayload<S extends boolean | null | undefined | OrganizationProfileDefaultArgs> = $Result.GetResult<Prisma.$OrganizationProfilePayload, S>

  type OrganizationProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationProfileCountAggregateInputType | true
    }

  export interface OrganizationProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationProfile'], meta: { name: 'OrganizationProfile' } }
    /**
     * Find zero or one OrganizationProfile that matches the filter.
     * @param {OrganizationProfileFindUniqueArgs} args - Arguments to find a OrganizationProfile
     * @example
     * // Get one OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationProfileFindUniqueArgs>(args: SelectSubset<T, OrganizationProfileFindUniqueArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationProfileFindUniqueOrThrowArgs} args - Arguments to find a OrganizationProfile
     * @example
     * // Get one OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileFindFirstArgs} args - Arguments to find a OrganizationProfile
     * @example
     * // Get one OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationProfileFindFirstArgs>(args?: SelectSubset<T, OrganizationProfileFindFirstArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileFindFirstOrThrowArgs} args - Arguments to find a OrganizationProfile
     * @example
     * // Get one OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationProfiles
     * const organizationProfiles = await prisma.organizationProfile.findMany()
     * 
     * // Get first 10 OrganizationProfiles
     * const organizationProfiles = await prisma.organizationProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationProfileWithIdOnly = await prisma.organizationProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationProfileFindManyArgs>(args?: SelectSubset<T, OrganizationProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationProfile.
     * @param {OrganizationProfileCreateArgs} args - Arguments to create a OrganizationProfile.
     * @example
     * // Create one OrganizationProfile
     * const OrganizationProfile = await prisma.organizationProfile.create({
     *   data: {
     *     // ... data to create a OrganizationProfile
     *   }
     * })
     * 
     */
    create<T extends OrganizationProfileCreateArgs>(args: SelectSubset<T, OrganizationProfileCreateArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationProfiles.
     * @param {OrganizationProfileCreateManyArgs} args - Arguments to create many OrganizationProfiles.
     * @example
     * // Create many OrganizationProfiles
     * const organizationProfile = await prisma.organizationProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationProfileCreateManyArgs>(args?: SelectSubset<T, OrganizationProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationProfiles and returns the data saved in the database.
     * @param {OrganizationProfileCreateManyAndReturnArgs} args - Arguments to create many OrganizationProfiles.
     * @example
     * // Create many OrganizationProfiles
     * const organizationProfile = await prisma.organizationProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationProfiles and only return the `id`
     * const organizationProfileWithIdOnly = await prisma.organizationProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationProfile.
     * @param {OrganizationProfileDeleteArgs} args - Arguments to delete one OrganizationProfile.
     * @example
     * // Delete one OrganizationProfile
     * const OrganizationProfile = await prisma.organizationProfile.delete({
     *   where: {
     *     // ... filter to delete one OrganizationProfile
     *   }
     * })
     * 
     */
    delete<T extends OrganizationProfileDeleteArgs>(args: SelectSubset<T, OrganizationProfileDeleteArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationProfile.
     * @param {OrganizationProfileUpdateArgs} args - Arguments to update one OrganizationProfile.
     * @example
     * // Update one OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationProfileUpdateArgs>(args: SelectSubset<T, OrganizationProfileUpdateArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationProfiles.
     * @param {OrganizationProfileDeleteManyArgs} args - Arguments to filter OrganizationProfiles to delete.
     * @example
     * // Delete a few OrganizationProfiles
     * const { count } = await prisma.organizationProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationProfileDeleteManyArgs>(args?: SelectSubset<T, OrganizationProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationProfiles
     * const organizationProfile = await prisma.organizationProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationProfileUpdateManyArgs>(args: SelectSubset<T, OrganizationProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationProfiles and returns the data updated in the database.
     * @param {OrganizationProfileUpdateManyAndReturnArgs} args - Arguments to update many OrganizationProfiles.
     * @example
     * // Update many OrganizationProfiles
     * const organizationProfile = await prisma.organizationProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationProfiles and only return the `id`
     * const organizationProfileWithIdOnly = await prisma.organizationProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationProfile.
     * @param {OrganizationProfileUpsertArgs} args - Arguments to update or create a OrganizationProfile.
     * @example
     * // Update or create a OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.upsert({
     *   create: {
     *     // ... data to create a OrganizationProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationProfile we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationProfileUpsertArgs>(args: SelectSubset<T, OrganizationProfileUpsertArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileCountArgs} args - Arguments to filter OrganizationProfiles to count.
     * @example
     * // Count the number of OrganizationProfiles
     * const count = await prisma.organizationProfile.count({
     *   where: {
     *     // ... the filter for the OrganizationProfiles we want to count
     *   }
     * })
    **/
    count<T extends OrganizationProfileCountArgs>(
      args?: Subset<T, OrganizationProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationProfileAggregateArgs>(args: Subset<T, OrganizationProfileAggregateArgs>): Prisma.PrismaPromise<GetOrganizationProfileAggregateType<T>>

    /**
     * Group by OrganizationProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationProfileGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationProfile model
   */
  readonly fields: OrganizationProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationProfile model
   */
  interface OrganizationProfileFieldRefs {
    readonly id: FieldRef<"OrganizationProfile", 'String'>
    readonly userId: FieldRef<"OrganizationProfile", 'String'>
    readonly organizationId: FieldRef<"OrganizationProfile", 'String'>
    readonly displayName: FieldRef<"OrganizationProfile", 'String'>
    readonly department: FieldRef<"OrganizationProfile", 'String'>
    readonly createdAt: FieldRef<"OrganizationProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"OrganizationProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationProfile findUnique
   */
  export type OrganizationProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationProfile to fetch.
     */
    where: OrganizationProfileWhereUniqueInput
  }

  /**
   * OrganizationProfile findUniqueOrThrow
   */
  export type OrganizationProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationProfile to fetch.
     */
    where: OrganizationProfileWhereUniqueInput
  }

  /**
   * OrganizationProfile findFirst
   */
  export type OrganizationProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationProfile to fetch.
     */
    where?: OrganizationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationProfiles to fetch.
     */
    orderBy?: OrganizationProfileOrderByWithRelationInput | OrganizationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationProfiles.
     */
    cursor?: OrganizationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationProfiles.
     */
    distinct?: OrganizationProfileScalarFieldEnum | OrganizationProfileScalarFieldEnum[]
  }

  /**
   * OrganizationProfile findFirstOrThrow
   */
  export type OrganizationProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationProfile to fetch.
     */
    where?: OrganizationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationProfiles to fetch.
     */
    orderBy?: OrganizationProfileOrderByWithRelationInput | OrganizationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationProfiles.
     */
    cursor?: OrganizationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationProfiles.
     */
    distinct?: OrganizationProfileScalarFieldEnum | OrganizationProfileScalarFieldEnum[]
  }

  /**
   * OrganizationProfile findMany
   */
  export type OrganizationProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationProfiles to fetch.
     */
    where?: OrganizationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationProfiles to fetch.
     */
    orderBy?: OrganizationProfileOrderByWithRelationInput | OrganizationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationProfiles.
     */
    cursor?: OrganizationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationProfiles.
     */
    skip?: number
    distinct?: OrganizationProfileScalarFieldEnum | OrganizationProfileScalarFieldEnum[]
  }

  /**
   * OrganizationProfile create
   */
  export type OrganizationProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationProfile.
     */
    data: XOR<OrganizationProfileCreateInput, OrganizationProfileUncheckedCreateInput>
  }

  /**
   * OrganizationProfile createMany
   */
  export type OrganizationProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationProfiles.
     */
    data: OrganizationProfileCreateManyInput | OrganizationProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationProfile createManyAndReturn
   */
  export type OrganizationProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationProfiles.
     */
    data: OrganizationProfileCreateManyInput | OrganizationProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationProfile update
   */
  export type OrganizationProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationProfile.
     */
    data: XOR<OrganizationProfileUpdateInput, OrganizationProfileUncheckedUpdateInput>
    /**
     * Choose, which OrganizationProfile to update.
     */
    where: OrganizationProfileWhereUniqueInput
  }

  /**
   * OrganizationProfile updateMany
   */
  export type OrganizationProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationProfiles.
     */
    data: XOR<OrganizationProfileUpdateManyMutationInput, OrganizationProfileUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationProfiles to update
     */
    where?: OrganizationProfileWhereInput
    /**
     * Limit how many OrganizationProfiles to update.
     */
    limit?: number
  }

  /**
   * OrganizationProfile updateManyAndReturn
   */
  export type OrganizationProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationProfiles.
     */
    data: XOR<OrganizationProfileUpdateManyMutationInput, OrganizationProfileUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationProfiles to update
     */
    where?: OrganizationProfileWhereInput
    /**
     * Limit how many OrganizationProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationProfile upsert
   */
  export type OrganizationProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationProfile to update in case it exists.
     */
    where: OrganizationProfileWhereUniqueInput
    /**
     * In case the OrganizationProfile found by the `where` argument doesn't exist, create a new OrganizationProfile with this data.
     */
    create: XOR<OrganizationProfileCreateInput, OrganizationProfileUncheckedCreateInput>
    /**
     * In case the OrganizationProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationProfileUpdateInput, OrganizationProfileUncheckedUpdateInput>
  }

  /**
   * OrganizationProfile delete
   */
  export type OrganizationProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter which OrganizationProfile to delete.
     */
    where: OrganizationProfileWhereUniqueInput
  }

  /**
   * OrganizationProfile deleteMany
   */
  export type OrganizationProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationProfiles to delete
     */
    where?: OrganizationProfileWhereInput
    /**
     * Limit how many OrganizationProfiles to delete.
     */
    limit?: number
  }

  /**
   * OrganizationProfile without action
   */
  export type OrganizationProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
  }


  /**
   * Model QrScanner
   */

  export type AggregateQrScanner = {
    _count: QrScannerCountAggregateOutputType | null
    _min: QrScannerMinAggregateOutputType | null
    _max: QrScannerMaxAggregateOutputType | null
  }

  export type QrScannerMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    location: string | null
    scannerId: string | null
    password: string | null
    status: string | null
    lastActive: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QrScannerMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    location: string | null
    scannerId: string | null
    password: string | null
    status: string | null
    lastActive: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QrScannerCountAggregateOutputType = {
    id: number
    organizationId: number
    name: number
    location: number
    scannerId: number
    password: number
    status: number
    lastActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QrScannerMinAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    location?: true
    scannerId?: true
    password?: true
    status?: true
    lastActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QrScannerMaxAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    location?: true
    scannerId?: true
    password?: true
    status?: true
    lastActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QrScannerCountAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    location?: true
    scannerId?: true
    password?: true
    status?: true
    lastActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QrScannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QrScanner to aggregate.
     */
    where?: QrScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrScanners to fetch.
     */
    orderBy?: QrScannerOrderByWithRelationInput | QrScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QrScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrScanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QrScanners
    **/
    _count?: true | QrScannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QrScannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QrScannerMaxAggregateInputType
  }

  export type GetQrScannerAggregateType<T extends QrScannerAggregateArgs> = {
        [P in keyof T & keyof AggregateQrScanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQrScanner[P]>
      : GetScalarType<T[P], AggregateQrScanner[P]>
  }




  export type QrScannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QrScannerWhereInput
    orderBy?: QrScannerOrderByWithAggregationInput | QrScannerOrderByWithAggregationInput[]
    by: QrScannerScalarFieldEnum[] | QrScannerScalarFieldEnum
    having?: QrScannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QrScannerCountAggregateInputType | true
    _min?: QrScannerMinAggregateInputType
    _max?: QrScannerMaxAggregateInputType
  }

  export type QrScannerGroupByOutputType = {
    id: string
    organizationId: string
    name: string
    location: string | null
    scannerId: string
    password: string
    status: string
    lastActive: Date | null
    createdAt: Date
    updatedAt: Date
    _count: QrScannerCountAggregateOutputType | null
    _min: QrScannerMinAggregateOutputType | null
    _max: QrScannerMaxAggregateOutputType | null
  }

  type GetQrScannerGroupByPayload<T extends QrScannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QrScannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QrScannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QrScannerGroupByOutputType[P]>
            : GetScalarType<T[P], QrScannerGroupByOutputType[P]>
        }
      >
    >


  export type QrScannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    location?: boolean
    scannerId?: boolean
    password?: boolean
    status?: boolean
    lastActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qrScanner"]>

  export type QrScannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    location?: boolean
    scannerId?: boolean
    password?: boolean
    status?: boolean
    lastActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qrScanner"]>

  export type QrScannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    location?: boolean
    scannerId?: boolean
    password?: boolean
    status?: boolean
    lastActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qrScanner"]>

  export type QrScannerSelectScalar = {
    id?: boolean
    organizationId?: boolean
    name?: boolean
    location?: boolean
    scannerId?: boolean
    password?: boolean
    status?: boolean
    lastActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QrScannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "name" | "location" | "scannerId" | "password" | "status" | "lastActive" | "createdAt" | "updatedAt", ExtArgs["result"]["qrScanner"]>
  export type QrScannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type QrScannerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type QrScannerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $QrScannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QrScanner"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      name: string
      location: string | null
      scannerId: string
      password: string
      status: string
      lastActive: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["qrScanner"]>
    composites: {}
  }

  type QrScannerGetPayload<S extends boolean | null | undefined | QrScannerDefaultArgs> = $Result.GetResult<Prisma.$QrScannerPayload, S>

  type QrScannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QrScannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QrScannerCountAggregateInputType | true
    }

  export interface QrScannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QrScanner'], meta: { name: 'QrScanner' } }
    /**
     * Find zero or one QrScanner that matches the filter.
     * @param {QrScannerFindUniqueArgs} args - Arguments to find a QrScanner
     * @example
     * // Get one QrScanner
     * const qrScanner = await prisma.qrScanner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QrScannerFindUniqueArgs>(args: SelectSubset<T, QrScannerFindUniqueArgs<ExtArgs>>): Prisma__QrScannerClient<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QrScanner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QrScannerFindUniqueOrThrowArgs} args - Arguments to find a QrScanner
     * @example
     * // Get one QrScanner
     * const qrScanner = await prisma.qrScanner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QrScannerFindUniqueOrThrowArgs>(args: SelectSubset<T, QrScannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QrScannerClient<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QrScanner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrScannerFindFirstArgs} args - Arguments to find a QrScanner
     * @example
     * // Get one QrScanner
     * const qrScanner = await prisma.qrScanner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QrScannerFindFirstArgs>(args?: SelectSubset<T, QrScannerFindFirstArgs<ExtArgs>>): Prisma__QrScannerClient<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QrScanner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrScannerFindFirstOrThrowArgs} args - Arguments to find a QrScanner
     * @example
     * // Get one QrScanner
     * const qrScanner = await prisma.qrScanner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QrScannerFindFirstOrThrowArgs>(args?: SelectSubset<T, QrScannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__QrScannerClient<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QrScanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrScannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QrScanners
     * const qrScanners = await prisma.qrScanner.findMany()
     * 
     * // Get first 10 QrScanners
     * const qrScanners = await prisma.qrScanner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qrScannerWithIdOnly = await prisma.qrScanner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QrScannerFindManyArgs>(args?: SelectSubset<T, QrScannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QrScanner.
     * @param {QrScannerCreateArgs} args - Arguments to create a QrScanner.
     * @example
     * // Create one QrScanner
     * const QrScanner = await prisma.qrScanner.create({
     *   data: {
     *     // ... data to create a QrScanner
     *   }
     * })
     * 
     */
    create<T extends QrScannerCreateArgs>(args: SelectSubset<T, QrScannerCreateArgs<ExtArgs>>): Prisma__QrScannerClient<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QrScanners.
     * @param {QrScannerCreateManyArgs} args - Arguments to create many QrScanners.
     * @example
     * // Create many QrScanners
     * const qrScanner = await prisma.qrScanner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QrScannerCreateManyArgs>(args?: SelectSubset<T, QrScannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QrScanners and returns the data saved in the database.
     * @param {QrScannerCreateManyAndReturnArgs} args - Arguments to create many QrScanners.
     * @example
     * // Create many QrScanners
     * const qrScanner = await prisma.qrScanner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QrScanners and only return the `id`
     * const qrScannerWithIdOnly = await prisma.qrScanner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QrScannerCreateManyAndReturnArgs>(args?: SelectSubset<T, QrScannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QrScanner.
     * @param {QrScannerDeleteArgs} args - Arguments to delete one QrScanner.
     * @example
     * // Delete one QrScanner
     * const QrScanner = await prisma.qrScanner.delete({
     *   where: {
     *     // ... filter to delete one QrScanner
     *   }
     * })
     * 
     */
    delete<T extends QrScannerDeleteArgs>(args: SelectSubset<T, QrScannerDeleteArgs<ExtArgs>>): Prisma__QrScannerClient<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QrScanner.
     * @param {QrScannerUpdateArgs} args - Arguments to update one QrScanner.
     * @example
     * // Update one QrScanner
     * const qrScanner = await prisma.qrScanner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QrScannerUpdateArgs>(args: SelectSubset<T, QrScannerUpdateArgs<ExtArgs>>): Prisma__QrScannerClient<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QrScanners.
     * @param {QrScannerDeleteManyArgs} args - Arguments to filter QrScanners to delete.
     * @example
     * // Delete a few QrScanners
     * const { count } = await prisma.qrScanner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QrScannerDeleteManyArgs>(args?: SelectSubset<T, QrScannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QrScanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrScannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QrScanners
     * const qrScanner = await prisma.qrScanner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QrScannerUpdateManyArgs>(args: SelectSubset<T, QrScannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QrScanners and returns the data updated in the database.
     * @param {QrScannerUpdateManyAndReturnArgs} args - Arguments to update many QrScanners.
     * @example
     * // Update many QrScanners
     * const qrScanner = await prisma.qrScanner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QrScanners and only return the `id`
     * const qrScannerWithIdOnly = await prisma.qrScanner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QrScannerUpdateManyAndReturnArgs>(args: SelectSubset<T, QrScannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QrScanner.
     * @param {QrScannerUpsertArgs} args - Arguments to update or create a QrScanner.
     * @example
     * // Update or create a QrScanner
     * const qrScanner = await prisma.qrScanner.upsert({
     *   create: {
     *     // ... data to create a QrScanner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QrScanner we want to update
     *   }
     * })
     */
    upsert<T extends QrScannerUpsertArgs>(args: SelectSubset<T, QrScannerUpsertArgs<ExtArgs>>): Prisma__QrScannerClient<$Result.GetResult<Prisma.$QrScannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QrScanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrScannerCountArgs} args - Arguments to filter QrScanners to count.
     * @example
     * // Count the number of QrScanners
     * const count = await prisma.qrScanner.count({
     *   where: {
     *     // ... the filter for the QrScanners we want to count
     *   }
     * })
    **/
    count<T extends QrScannerCountArgs>(
      args?: Subset<T, QrScannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QrScannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QrScanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrScannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QrScannerAggregateArgs>(args: Subset<T, QrScannerAggregateArgs>): Prisma.PrismaPromise<GetQrScannerAggregateType<T>>

    /**
     * Group by QrScanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrScannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QrScannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QrScannerGroupByArgs['orderBy'] }
        : { orderBy?: QrScannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QrScannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQrScannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QrScanner model
   */
  readonly fields: QrScannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QrScanner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QrScannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QrScanner model
   */
  interface QrScannerFieldRefs {
    readonly id: FieldRef<"QrScanner", 'String'>
    readonly organizationId: FieldRef<"QrScanner", 'String'>
    readonly name: FieldRef<"QrScanner", 'String'>
    readonly location: FieldRef<"QrScanner", 'String'>
    readonly scannerId: FieldRef<"QrScanner", 'String'>
    readonly password: FieldRef<"QrScanner", 'String'>
    readonly status: FieldRef<"QrScanner", 'String'>
    readonly lastActive: FieldRef<"QrScanner", 'DateTime'>
    readonly createdAt: FieldRef<"QrScanner", 'DateTime'>
    readonly updatedAt: FieldRef<"QrScanner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QrScanner findUnique
   */
  export type QrScannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerInclude<ExtArgs> | null
    /**
     * Filter, which QrScanner to fetch.
     */
    where: QrScannerWhereUniqueInput
  }

  /**
   * QrScanner findUniqueOrThrow
   */
  export type QrScannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerInclude<ExtArgs> | null
    /**
     * Filter, which QrScanner to fetch.
     */
    where: QrScannerWhereUniqueInput
  }

  /**
   * QrScanner findFirst
   */
  export type QrScannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerInclude<ExtArgs> | null
    /**
     * Filter, which QrScanner to fetch.
     */
    where?: QrScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrScanners to fetch.
     */
    orderBy?: QrScannerOrderByWithRelationInput | QrScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QrScanners.
     */
    cursor?: QrScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrScanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QrScanners.
     */
    distinct?: QrScannerScalarFieldEnum | QrScannerScalarFieldEnum[]
  }

  /**
   * QrScanner findFirstOrThrow
   */
  export type QrScannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerInclude<ExtArgs> | null
    /**
     * Filter, which QrScanner to fetch.
     */
    where?: QrScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrScanners to fetch.
     */
    orderBy?: QrScannerOrderByWithRelationInput | QrScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QrScanners.
     */
    cursor?: QrScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrScanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QrScanners.
     */
    distinct?: QrScannerScalarFieldEnum | QrScannerScalarFieldEnum[]
  }

  /**
   * QrScanner findMany
   */
  export type QrScannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerInclude<ExtArgs> | null
    /**
     * Filter, which QrScanners to fetch.
     */
    where?: QrScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrScanners to fetch.
     */
    orderBy?: QrScannerOrderByWithRelationInput | QrScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QrScanners.
     */
    cursor?: QrScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrScanners.
     */
    skip?: number
    distinct?: QrScannerScalarFieldEnum | QrScannerScalarFieldEnum[]
  }

  /**
   * QrScanner create
   */
  export type QrScannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerInclude<ExtArgs> | null
    /**
     * The data needed to create a QrScanner.
     */
    data: XOR<QrScannerCreateInput, QrScannerUncheckedCreateInput>
  }

  /**
   * QrScanner createMany
   */
  export type QrScannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QrScanners.
     */
    data: QrScannerCreateManyInput | QrScannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QrScanner createManyAndReturn
   */
  export type QrScannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * The data used to create many QrScanners.
     */
    data: QrScannerCreateManyInput | QrScannerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QrScanner update
   */
  export type QrScannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerInclude<ExtArgs> | null
    /**
     * The data needed to update a QrScanner.
     */
    data: XOR<QrScannerUpdateInput, QrScannerUncheckedUpdateInput>
    /**
     * Choose, which QrScanner to update.
     */
    where: QrScannerWhereUniqueInput
  }

  /**
   * QrScanner updateMany
   */
  export type QrScannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QrScanners.
     */
    data: XOR<QrScannerUpdateManyMutationInput, QrScannerUncheckedUpdateManyInput>
    /**
     * Filter which QrScanners to update
     */
    where?: QrScannerWhereInput
    /**
     * Limit how many QrScanners to update.
     */
    limit?: number
  }

  /**
   * QrScanner updateManyAndReturn
   */
  export type QrScannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * The data used to update QrScanners.
     */
    data: XOR<QrScannerUpdateManyMutationInput, QrScannerUncheckedUpdateManyInput>
    /**
     * Filter which QrScanners to update
     */
    where?: QrScannerWhereInput
    /**
     * Limit how many QrScanners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QrScanner upsert
   */
  export type QrScannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerInclude<ExtArgs> | null
    /**
     * The filter to search for the QrScanner to update in case it exists.
     */
    where: QrScannerWhereUniqueInput
    /**
     * In case the QrScanner found by the `where` argument doesn't exist, create a new QrScanner with this data.
     */
    create: XOR<QrScannerCreateInput, QrScannerUncheckedCreateInput>
    /**
     * In case the QrScanner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QrScannerUpdateInput, QrScannerUncheckedUpdateInput>
  }

  /**
   * QrScanner delete
   */
  export type QrScannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerInclude<ExtArgs> | null
    /**
     * Filter which QrScanner to delete.
     */
    where: QrScannerWhereUniqueInput
  }

  /**
   * QrScanner deleteMany
   */
  export type QrScannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QrScanners to delete
     */
    where?: QrScannerWhereInput
    /**
     * Limit how many QrScanners to delete.
     */
    limit?: number
  }

  /**
   * QrScanner without action
   */
  export type QrScannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrScanner
     */
    select?: QrScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrScanner
     */
    omit?: QrScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrScannerInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationInvitation
   */

  export type AggregateOrganizationInvitation = {
    _count: OrganizationInvitationCountAggregateOutputType | null
    _min: OrganizationInvitationMinAggregateOutputType | null
    _max: OrganizationInvitationMaxAggregateOutputType | null
  }

  export type OrganizationInvitationMinAggregateOutputType = {
    id: string | null
    email: string | null
    organizationId: string | null
    role: $Enums.OrganizationRole | null
    expiresAt: Date | null
    invitedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationInvitationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    organizationId: string | null
    role: $Enums.OrganizationRole | null
    expiresAt: Date | null
    invitedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationInvitationCountAggregateOutputType = {
    id: number
    email: number
    organizationId: number
    role: number
    expiresAt: number
    invitedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationInvitationMinAggregateInputType = {
    id?: true
    email?: true
    organizationId?: true
    role?: true
    expiresAt?: true
    invitedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationInvitationMaxAggregateInputType = {
    id?: true
    email?: true
    organizationId?: true
    role?: true
    expiresAt?: true
    invitedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationInvitationCountAggregateInputType = {
    id?: true
    email?: true
    organizationId?: true
    role?: true
    expiresAt?: true
    invitedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationInvitation to aggregate.
     */
    where?: OrganizationInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationInvitations to fetch.
     */
    orderBy?: OrganizationInvitationOrderByWithRelationInput | OrganizationInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationInvitations
    **/
    _count?: true | OrganizationInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationInvitationMaxAggregateInputType
  }

  export type GetOrganizationInvitationAggregateType<T extends OrganizationInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationInvitation[P]>
      : GetScalarType<T[P], AggregateOrganizationInvitation[P]>
  }




  export type OrganizationInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationInvitationWhereInput
    orderBy?: OrganizationInvitationOrderByWithAggregationInput | OrganizationInvitationOrderByWithAggregationInput[]
    by: OrganizationInvitationScalarFieldEnum[] | OrganizationInvitationScalarFieldEnum
    having?: OrganizationInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationInvitationCountAggregateInputType | true
    _min?: OrganizationInvitationMinAggregateInputType
    _max?: OrganizationInvitationMaxAggregateInputType
  }

  export type OrganizationInvitationGroupByOutputType = {
    id: string
    email: string
    organizationId: string
    role: $Enums.OrganizationRole
    expiresAt: Date
    invitedBy: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationInvitationCountAggregateOutputType | null
    _min: OrganizationInvitationMinAggregateOutputType | null
    _max: OrganizationInvitationMaxAggregateOutputType | null
  }

  type GetOrganizationInvitationGroupByPayload<T extends OrganizationInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationInvitationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    organizationId?: boolean
    role?: boolean
    expiresAt?: boolean
    invitedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationInvitation"]>

  export type OrganizationInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    organizationId?: boolean
    role?: boolean
    expiresAt?: boolean
    invitedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationInvitation"]>

  export type OrganizationInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    organizationId?: boolean
    role?: boolean
    expiresAt?: boolean
    invitedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationInvitation"]>

  export type OrganizationInvitationSelectScalar = {
    id?: boolean
    email?: boolean
    organizationId?: boolean
    role?: boolean
    expiresAt?: boolean
    invitedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "organizationId" | "role" | "expiresAt" | "invitedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["organizationInvitation"]>
  export type OrganizationInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationInvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrganizationInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationInvitation"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      inviter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      organizationId: string
      role: $Enums.OrganizationRole
      expiresAt: Date
      invitedBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organizationInvitation"]>
    composites: {}
  }

  type OrganizationInvitationGetPayload<S extends boolean | null | undefined | OrganizationInvitationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationInvitationPayload, S>

  type OrganizationInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationInvitationCountAggregateInputType | true
    }

  export interface OrganizationInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationInvitation'], meta: { name: 'OrganizationInvitation' } }
    /**
     * Find zero or one OrganizationInvitation that matches the filter.
     * @param {OrganizationInvitationFindUniqueArgs} args - Arguments to find a OrganizationInvitation
     * @example
     * // Get one OrganizationInvitation
     * const organizationInvitation = await prisma.organizationInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationInvitationFindUniqueArgs>(args: SelectSubset<T, OrganizationInvitationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationInvitationClient<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationInvitationFindUniqueOrThrowArgs} args - Arguments to find a OrganizationInvitation
     * @example
     * // Get one OrganizationInvitation
     * const organizationInvitation = await prisma.organizationInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationInvitationClient<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInvitationFindFirstArgs} args - Arguments to find a OrganizationInvitation
     * @example
     * // Get one OrganizationInvitation
     * const organizationInvitation = await prisma.organizationInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationInvitationFindFirstArgs>(args?: SelectSubset<T, OrganizationInvitationFindFirstArgs<ExtArgs>>): Prisma__OrganizationInvitationClient<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInvitationFindFirstOrThrowArgs} args - Arguments to find a OrganizationInvitation
     * @example
     * // Get one OrganizationInvitation
     * const organizationInvitation = await prisma.organizationInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationInvitationClient<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationInvitations
     * const organizationInvitations = await prisma.organizationInvitation.findMany()
     * 
     * // Get first 10 OrganizationInvitations
     * const organizationInvitations = await prisma.organizationInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationInvitationWithIdOnly = await prisma.organizationInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationInvitationFindManyArgs>(args?: SelectSubset<T, OrganizationInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationInvitation.
     * @param {OrganizationInvitationCreateArgs} args - Arguments to create a OrganizationInvitation.
     * @example
     * // Create one OrganizationInvitation
     * const OrganizationInvitation = await prisma.organizationInvitation.create({
     *   data: {
     *     // ... data to create a OrganizationInvitation
     *   }
     * })
     * 
     */
    create<T extends OrganizationInvitationCreateArgs>(args: SelectSubset<T, OrganizationInvitationCreateArgs<ExtArgs>>): Prisma__OrganizationInvitationClient<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationInvitations.
     * @param {OrganizationInvitationCreateManyArgs} args - Arguments to create many OrganizationInvitations.
     * @example
     * // Create many OrganizationInvitations
     * const organizationInvitation = await prisma.organizationInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationInvitationCreateManyArgs>(args?: SelectSubset<T, OrganizationInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationInvitations and returns the data saved in the database.
     * @param {OrganizationInvitationCreateManyAndReturnArgs} args - Arguments to create many OrganizationInvitations.
     * @example
     * // Create many OrganizationInvitations
     * const organizationInvitation = await prisma.organizationInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationInvitations and only return the `id`
     * const organizationInvitationWithIdOnly = await prisma.organizationInvitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationInvitation.
     * @param {OrganizationInvitationDeleteArgs} args - Arguments to delete one OrganizationInvitation.
     * @example
     * // Delete one OrganizationInvitation
     * const OrganizationInvitation = await prisma.organizationInvitation.delete({
     *   where: {
     *     // ... filter to delete one OrganizationInvitation
     *   }
     * })
     * 
     */
    delete<T extends OrganizationInvitationDeleteArgs>(args: SelectSubset<T, OrganizationInvitationDeleteArgs<ExtArgs>>): Prisma__OrganizationInvitationClient<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationInvitation.
     * @param {OrganizationInvitationUpdateArgs} args - Arguments to update one OrganizationInvitation.
     * @example
     * // Update one OrganizationInvitation
     * const organizationInvitation = await prisma.organizationInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationInvitationUpdateArgs>(args: SelectSubset<T, OrganizationInvitationUpdateArgs<ExtArgs>>): Prisma__OrganizationInvitationClient<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationInvitations.
     * @param {OrganizationInvitationDeleteManyArgs} args - Arguments to filter OrganizationInvitations to delete.
     * @example
     * // Delete a few OrganizationInvitations
     * const { count } = await prisma.organizationInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationInvitationDeleteManyArgs>(args?: SelectSubset<T, OrganizationInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationInvitations
     * const organizationInvitation = await prisma.organizationInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationInvitationUpdateManyArgs>(args: SelectSubset<T, OrganizationInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationInvitations and returns the data updated in the database.
     * @param {OrganizationInvitationUpdateManyAndReturnArgs} args - Arguments to update many OrganizationInvitations.
     * @example
     * // Update many OrganizationInvitations
     * const organizationInvitation = await prisma.organizationInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationInvitations and only return the `id`
     * const organizationInvitationWithIdOnly = await prisma.organizationInvitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationInvitation.
     * @param {OrganizationInvitationUpsertArgs} args - Arguments to update or create a OrganizationInvitation.
     * @example
     * // Update or create a OrganizationInvitation
     * const organizationInvitation = await prisma.organizationInvitation.upsert({
     *   create: {
     *     // ... data to create a OrganizationInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationInvitation we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationInvitationUpsertArgs>(args: SelectSubset<T, OrganizationInvitationUpsertArgs<ExtArgs>>): Prisma__OrganizationInvitationClient<$Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInvitationCountArgs} args - Arguments to filter OrganizationInvitations to count.
     * @example
     * // Count the number of OrganizationInvitations
     * const count = await prisma.organizationInvitation.count({
     *   where: {
     *     // ... the filter for the OrganizationInvitations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationInvitationCountArgs>(
      args?: Subset<T, OrganizationInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationInvitationAggregateArgs>(args: Subset<T, OrganizationInvitationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationInvitationAggregateType<T>>

    /**
     * Group by OrganizationInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationInvitationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationInvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationInvitation model
   */
  readonly fields: OrganizationInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inviter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationInvitation model
   */
  interface OrganizationInvitationFieldRefs {
    readonly id: FieldRef<"OrganizationInvitation", 'String'>
    readonly email: FieldRef<"OrganizationInvitation", 'String'>
    readonly organizationId: FieldRef<"OrganizationInvitation", 'String'>
    readonly role: FieldRef<"OrganizationInvitation", 'OrganizationRole'>
    readonly expiresAt: FieldRef<"OrganizationInvitation", 'DateTime'>
    readonly invitedBy: FieldRef<"OrganizationInvitation", 'String'>
    readonly createdAt: FieldRef<"OrganizationInvitation", 'DateTime'>
    readonly updatedAt: FieldRef<"OrganizationInvitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationInvitation findUnique
   */
  export type OrganizationInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationInvitation to fetch.
     */
    where: OrganizationInvitationWhereUniqueInput
  }

  /**
   * OrganizationInvitation findUniqueOrThrow
   */
  export type OrganizationInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationInvitation to fetch.
     */
    where: OrganizationInvitationWhereUniqueInput
  }

  /**
   * OrganizationInvitation findFirst
   */
  export type OrganizationInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationInvitation to fetch.
     */
    where?: OrganizationInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationInvitations to fetch.
     */
    orderBy?: OrganizationInvitationOrderByWithRelationInput | OrganizationInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationInvitations.
     */
    cursor?: OrganizationInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationInvitations.
     */
    distinct?: OrganizationInvitationScalarFieldEnum | OrganizationInvitationScalarFieldEnum[]
  }

  /**
   * OrganizationInvitation findFirstOrThrow
   */
  export type OrganizationInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationInvitation to fetch.
     */
    where?: OrganizationInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationInvitations to fetch.
     */
    orderBy?: OrganizationInvitationOrderByWithRelationInput | OrganizationInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationInvitations.
     */
    cursor?: OrganizationInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationInvitations.
     */
    distinct?: OrganizationInvitationScalarFieldEnum | OrganizationInvitationScalarFieldEnum[]
  }

  /**
   * OrganizationInvitation findMany
   */
  export type OrganizationInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationInvitations to fetch.
     */
    where?: OrganizationInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationInvitations to fetch.
     */
    orderBy?: OrganizationInvitationOrderByWithRelationInput | OrganizationInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationInvitations.
     */
    cursor?: OrganizationInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationInvitations.
     */
    skip?: number
    distinct?: OrganizationInvitationScalarFieldEnum | OrganizationInvitationScalarFieldEnum[]
  }

  /**
   * OrganizationInvitation create
   */
  export type OrganizationInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationInvitation.
     */
    data: XOR<OrganizationInvitationCreateInput, OrganizationInvitationUncheckedCreateInput>
  }

  /**
   * OrganizationInvitation createMany
   */
  export type OrganizationInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationInvitations.
     */
    data: OrganizationInvitationCreateManyInput | OrganizationInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationInvitation createManyAndReturn
   */
  export type OrganizationInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationInvitations.
     */
    data: OrganizationInvitationCreateManyInput | OrganizationInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationInvitation update
   */
  export type OrganizationInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationInvitation.
     */
    data: XOR<OrganizationInvitationUpdateInput, OrganizationInvitationUncheckedUpdateInput>
    /**
     * Choose, which OrganizationInvitation to update.
     */
    where: OrganizationInvitationWhereUniqueInput
  }

  /**
   * OrganizationInvitation updateMany
   */
  export type OrganizationInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationInvitations.
     */
    data: XOR<OrganizationInvitationUpdateManyMutationInput, OrganizationInvitationUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationInvitations to update
     */
    where?: OrganizationInvitationWhereInput
    /**
     * Limit how many OrganizationInvitations to update.
     */
    limit?: number
  }

  /**
   * OrganizationInvitation updateManyAndReturn
   */
  export type OrganizationInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationInvitations.
     */
    data: XOR<OrganizationInvitationUpdateManyMutationInput, OrganizationInvitationUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationInvitations to update
     */
    where?: OrganizationInvitationWhereInput
    /**
     * Limit how many OrganizationInvitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationInvitation upsert
   */
  export type OrganizationInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationInvitation to update in case it exists.
     */
    where: OrganizationInvitationWhereUniqueInput
    /**
     * In case the OrganizationInvitation found by the `where` argument doesn't exist, create a new OrganizationInvitation with this data.
     */
    create: XOR<OrganizationInvitationCreateInput, OrganizationInvitationUncheckedCreateInput>
    /**
     * In case the OrganizationInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationInvitationUpdateInput, OrganizationInvitationUncheckedUpdateInput>
  }

  /**
   * OrganizationInvitation delete
   */
  export type OrganizationInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
    /**
     * Filter which OrganizationInvitation to delete.
     */
    where: OrganizationInvitationWhereUniqueInput
  }

  /**
   * OrganizationInvitation deleteMany
   */
  export type OrganizationInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationInvitations to delete
     */
    where?: OrganizationInvitationWhereInput
    /**
     * Limit how many OrganizationInvitations to delete.
     */
    limit?: number
  }

  /**
   * OrganizationInvitation without action
   */
  export type OrganizationInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInvitation
     */
    select?: OrganizationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInvitation
     */
    omit?: OrganizationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInvitationInclude<ExtArgs> | null
  }


  /**
   * Model SystemTeamMember
   */

  export type AggregateSystemTeamMember = {
    _count: SystemTeamMemberCountAggregateOutputType | null
    _min: SystemTeamMemberMinAggregateOutputType | null
    _max: SystemTeamMemberMaxAggregateOutputType | null
  }

  export type SystemTeamMemberMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemTeamMemberMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemTeamMemberCountAggregateOutputType = {
    id: number
    clerkId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemTeamMemberMinAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemTeamMemberMaxAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemTeamMemberCountAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemTeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemTeamMember to aggregate.
     */
    where?: SystemTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemTeamMembers to fetch.
     */
    orderBy?: SystemTeamMemberOrderByWithRelationInput | SystemTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemTeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemTeamMembers
    **/
    _count?: true | SystemTeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemTeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemTeamMemberMaxAggregateInputType
  }

  export type GetSystemTeamMemberAggregateType<T extends SystemTeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemTeamMember[P]>
      : GetScalarType<T[P], AggregateSystemTeamMember[P]>
  }




  export type SystemTeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemTeamMemberWhereInput
    orderBy?: SystemTeamMemberOrderByWithAggregationInput | SystemTeamMemberOrderByWithAggregationInput[]
    by: SystemTeamMemberScalarFieldEnum[] | SystemTeamMemberScalarFieldEnum
    having?: SystemTeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemTeamMemberCountAggregateInputType | true
    _min?: SystemTeamMemberMinAggregateInputType
    _max?: SystemTeamMemberMaxAggregateInputType
  }

  export type SystemTeamMemberGroupByOutputType = {
    id: string
    clerkId: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: SystemTeamMemberCountAggregateOutputType | null
    _min: SystemTeamMemberMinAggregateOutputType | null
    _max: SystemTeamMemberMaxAggregateOutputType | null
  }

  type GetSystemTeamMemberGroupByPayload<T extends SystemTeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemTeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemTeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemTeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], SystemTeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type SystemTeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemTeamMember"]>

  export type SystemTeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemTeamMember"]>

  export type SystemTeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemTeamMember"]>

  export type SystemTeamMemberSelectScalar = {
    id?: boolean
    clerkId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SystemTeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["systemTeamMember"]>

  export type $SystemTeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemTeamMember"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemTeamMember"]>
    composites: {}
  }

  type SystemTeamMemberGetPayload<S extends boolean | null | undefined | SystemTeamMemberDefaultArgs> = $Result.GetResult<Prisma.$SystemTeamMemberPayload, S>

  type SystemTeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemTeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemTeamMemberCountAggregateInputType | true
    }

  export interface SystemTeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemTeamMember'], meta: { name: 'SystemTeamMember' } }
    /**
     * Find zero or one SystemTeamMember that matches the filter.
     * @param {SystemTeamMemberFindUniqueArgs} args - Arguments to find a SystemTeamMember
     * @example
     * // Get one SystemTeamMember
     * const systemTeamMember = await prisma.systemTeamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemTeamMemberFindUniqueArgs>(args: SelectSubset<T, SystemTeamMemberFindUniqueArgs<ExtArgs>>): Prisma__SystemTeamMemberClient<$Result.GetResult<Prisma.$SystemTeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemTeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemTeamMemberFindUniqueOrThrowArgs} args - Arguments to find a SystemTeamMember
     * @example
     * // Get one SystemTeamMember
     * const systemTeamMember = await prisma.systemTeamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemTeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemTeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemTeamMemberClient<$Result.GetResult<Prisma.$SystemTeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemTeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemTeamMemberFindFirstArgs} args - Arguments to find a SystemTeamMember
     * @example
     * // Get one SystemTeamMember
     * const systemTeamMember = await prisma.systemTeamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemTeamMemberFindFirstArgs>(args?: SelectSubset<T, SystemTeamMemberFindFirstArgs<ExtArgs>>): Prisma__SystemTeamMemberClient<$Result.GetResult<Prisma.$SystemTeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemTeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemTeamMemberFindFirstOrThrowArgs} args - Arguments to find a SystemTeamMember
     * @example
     * // Get one SystemTeamMember
     * const systemTeamMember = await prisma.systemTeamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemTeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemTeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemTeamMemberClient<$Result.GetResult<Prisma.$SystemTeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemTeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemTeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemTeamMembers
     * const systemTeamMembers = await prisma.systemTeamMember.findMany()
     * 
     * // Get first 10 SystemTeamMembers
     * const systemTeamMembers = await prisma.systemTeamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemTeamMemberWithIdOnly = await prisma.systemTeamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemTeamMemberFindManyArgs>(args?: SelectSubset<T, SystemTeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemTeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemTeamMember.
     * @param {SystemTeamMemberCreateArgs} args - Arguments to create a SystemTeamMember.
     * @example
     * // Create one SystemTeamMember
     * const SystemTeamMember = await prisma.systemTeamMember.create({
     *   data: {
     *     // ... data to create a SystemTeamMember
     *   }
     * })
     * 
     */
    create<T extends SystemTeamMemberCreateArgs>(args: SelectSubset<T, SystemTeamMemberCreateArgs<ExtArgs>>): Prisma__SystemTeamMemberClient<$Result.GetResult<Prisma.$SystemTeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemTeamMembers.
     * @param {SystemTeamMemberCreateManyArgs} args - Arguments to create many SystemTeamMembers.
     * @example
     * // Create many SystemTeamMembers
     * const systemTeamMember = await prisma.systemTeamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemTeamMemberCreateManyArgs>(args?: SelectSubset<T, SystemTeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemTeamMembers and returns the data saved in the database.
     * @param {SystemTeamMemberCreateManyAndReturnArgs} args - Arguments to create many SystemTeamMembers.
     * @example
     * // Create many SystemTeamMembers
     * const systemTeamMember = await prisma.systemTeamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemTeamMembers and only return the `id`
     * const systemTeamMemberWithIdOnly = await prisma.systemTeamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemTeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemTeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemTeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemTeamMember.
     * @param {SystemTeamMemberDeleteArgs} args - Arguments to delete one SystemTeamMember.
     * @example
     * // Delete one SystemTeamMember
     * const SystemTeamMember = await prisma.systemTeamMember.delete({
     *   where: {
     *     // ... filter to delete one SystemTeamMember
     *   }
     * })
     * 
     */
    delete<T extends SystemTeamMemberDeleteArgs>(args: SelectSubset<T, SystemTeamMemberDeleteArgs<ExtArgs>>): Prisma__SystemTeamMemberClient<$Result.GetResult<Prisma.$SystemTeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemTeamMember.
     * @param {SystemTeamMemberUpdateArgs} args - Arguments to update one SystemTeamMember.
     * @example
     * // Update one SystemTeamMember
     * const systemTeamMember = await prisma.systemTeamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemTeamMemberUpdateArgs>(args: SelectSubset<T, SystemTeamMemberUpdateArgs<ExtArgs>>): Prisma__SystemTeamMemberClient<$Result.GetResult<Prisma.$SystemTeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemTeamMembers.
     * @param {SystemTeamMemberDeleteManyArgs} args - Arguments to filter SystemTeamMembers to delete.
     * @example
     * // Delete a few SystemTeamMembers
     * const { count } = await prisma.systemTeamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemTeamMemberDeleteManyArgs>(args?: SelectSubset<T, SystemTeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemTeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemTeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemTeamMembers
     * const systemTeamMember = await prisma.systemTeamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemTeamMemberUpdateManyArgs>(args: SelectSubset<T, SystemTeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemTeamMembers and returns the data updated in the database.
     * @param {SystemTeamMemberUpdateManyAndReturnArgs} args - Arguments to update many SystemTeamMembers.
     * @example
     * // Update many SystemTeamMembers
     * const systemTeamMember = await prisma.systemTeamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemTeamMembers and only return the `id`
     * const systemTeamMemberWithIdOnly = await prisma.systemTeamMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemTeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemTeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemTeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemTeamMember.
     * @param {SystemTeamMemberUpsertArgs} args - Arguments to update or create a SystemTeamMember.
     * @example
     * // Update or create a SystemTeamMember
     * const systemTeamMember = await prisma.systemTeamMember.upsert({
     *   create: {
     *     // ... data to create a SystemTeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemTeamMember we want to update
     *   }
     * })
     */
    upsert<T extends SystemTeamMemberUpsertArgs>(args: SelectSubset<T, SystemTeamMemberUpsertArgs<ExtArgs>>): Prisma__SystemTeamMemberClient<$Result.GetResult<Prisma.$SystemTeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemTeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemTeamMemberCountArgs} args - Arguments to filter SystemTeamMembers to count.
     * @example
     * // Count the number of SystemTeamMembers
     * const count = await prisma.systemTeamMember.count({
     *   where: {
     *     // ... the filter for the SystemTeamMembers we want to count
     *   }
     * })
    **/
    count<T extends SystemTeamMemberCountArgs>(
      args?: Subset<T, SystemTeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemTeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemTeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemTeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemTeamMemberAggregateArgs>(args: Subset<T, SystemTeamMemberAggregateArgs>): Prisma.PrismaPromise<GetSystemTeamMemberAggregateType<T>>

    /**
     * Group by SystemTeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemTeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemTeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemTeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: SystemTeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemTeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemTeamMember model
   */
  readonly fields: SystemTeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemTeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemTeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemTeamMember model
   */
  interface SystemTeamMemberFieldRefs {
    readonly id: FieldRef<"SystemTeamMember", 'String'>
    readonly clerkId: FieldRef<"SystemTeamMember", 'String'>
    readonly role: FieldRef<"SystemTeamMember", 'String'>
    readonly createdAt: FieldRef<"SystemTeamMember", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemTeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemTeamMember findUnique
   */
  export type SystemTeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which SystemTeamMember to fetch.
     */
    where: SystemTeamMemberWhereUniqueInput
  }

  /**
   * SystemTeamMember findUniqueOrThrow
   */
  export type SystemTeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which SystemTeamMember to fetch.
     */
    where: SystemTeamMemberWhereUniqueInput
  }

  /**
   * SystemTeamMember findFirst
   */
  export type SystemTeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which SystemTeamMember to fetch.
     */
    where?: SystemTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemTeamMembers to fetch.
     */
    orderBy?: SystemTeamMemberOrderByWithRelationInput | SystemTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemTeamMembers.
     */
    cursor?: SystemTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemTeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemTeamMembers.
     */
    distinct?: SystemTeamMemberScalarFieldEnum | SystemTeamMemberScalarFieldEnum[]
  }

  /**
   * SystemTeamMember findFirstOrThrow
   */
  export type SystemTeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which SystemTeamMember to fetch.
     */
    where?: SystemTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemTeamMembers to fetch.
     */
    orderBy?: SystemTeamMemberOrderByWithRelationInput | SystemTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemTeamMembers.
     */
    cursor?: SystemTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemTeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemTeamMembers.
     */
    distinct?: SystemTeamMemberScalarFieldEnum | SystemTeamMemberScalarFieldEnum[]
  }

  /**
   * SystemTeamMember findMany
   */
  export type SystemTeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which SystemTeamMembers to fetch.
     */
    where?: SystemTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemTeamMembers to fetch.
     */
    orderBy?: SystemTeamMemberOrderByWithRelationInput | SystemTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemTeamMembers.
     */
    cursor?: SystemTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemTeamMembers.
     */
    skip?: number
    distinct?: SystemTeamMemberScalarFieldEnum | SystemTeamMemberScalarFieldEnum[]
  }

  /**
   * SystemTeamMember create
   */
  export type SystemTeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemTeamMember.
     */
    data: XOR<SystemTeamMemberCreateInput, SystemTeamMemberUncheckedCreateInput>
  }

  /**
   * SystemTeamMember createMany
   */
  export type SystemTeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemTeamMembers.
     */
    data: SystemTeamMemberCreateManyInput | SystemTeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemTeamMember createManyAndReturn
   */
  export type SystemTeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many SystemTeamMembers.
     */
    data: SystemTeamMemberCreateManyInput | SystemTeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemTeamMember update
   */
  export type SystemTeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemTeamMember.
     */
    data: XOR<SystemTeamMemberUpdateInput, SystemTeamMemberUncheckedUpdateInput>
    /**
     * Choose, which SystemTeamMember to update.
     */
    where: SystemTeamMemberWhereUniqueInput
  }

  /**
   * SystemTeamMember updateMany
   */
  export type SystemTeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemTeamMembers.
     */
    data: XOR<SystemTeamMemberUpdateManyMutationInput, SystemTeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which SystemTeamMembers to update
     */
    where?: SystemTeamMemberWhereInput
    /**
     * Limit how many SystemTeamMembers to update.
     */
    limit?: number
  }

  /**
   * SystemTeamMember updateManyAndReturn
   */
  export type SystemTeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update SystemTeamMembers.
     */
    data: XOR<SystemTeamMemberUpdateManyMutationInput, SystemTeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which SystemTeamMembers to update
     */
    where?: SystemTeamMemberWhereInput
    /**
     * Limit how many SystemTeamMembers to update.
     */
    limit?: number
  }

  /**
   * SystemTeamMember upsert
   */
  export type SystemTeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemTeamMember to update in case it exists.
     */
    where: SystemTeamMemberWhereUniqueInput
    /**
     * In case the SystemTeamMember found by the `where` argument doesn't exist, create a new SystemTeamMember with this data.
     */
    create: XOR<SystemTeamMemberCreateInput, SystemTeamMemberUncheckedCreateInput>
    /**
     * In case the SystemTeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemTeamMemberUpdateInput, SystemTeamMemberUncheckedUpdateInput>
  }

  /**
   * SystemTeamMember delete
   */
  export type SystemTeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
    /**
     * Filter which SystemTeamMember to delete.
     */
    where: SystemTeamMemberWhereUniqueInput
  }

  /**
   * SystemTeamMember deleteMany
   */
  export type SystemTeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemTeamMembers to delete
     */
    where?: SystemTeamMemberWhereInput
    /**
     * Limit how many SystemTeamMembers to delete.
     */
    limit?: number
  }

  /**
   * SystemTeamMember without action
   */
  export type SystemTeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemTeamMember
     */
    select?: SystemTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemTeamMember
     */
    omit?: SystemTeamMemberOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    organizationId: 'organizationId',
    roles: 'roles',
    systemRole: 'systemRole',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrganizationMembershipScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationMembershipScalarFieldEnum = (typeof OrganizationMembershipScalarFieldEnum)[keyof typeof OrganizationMembershipScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    managerName: 'managerName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrganizationProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    displayName: 'displayName',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationProfileScalarFieldEnum = (typeof OrganizationProfileScalarFieldEnum)[keyof typeof OrganizationProfileScalarFieldEnum]


  export const QrScannerScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    location: 'location',
    scannerId: 'scannerId',
    password: 'password',
    status: 'status',
    lastActive: 'lastActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QrScannerScalarFieldEnum = (typeof QrScannerScalarFieldEnum)[keyof typeof QrScannerScalarFieldEnum]


  export const OrganizationInvitationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    organizationId: 'organizationId',
    role: 'role',
    expiresAt: 'expiresAt',
    invitedBy: 'invitedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationInvitationScalarFieldEnum = (typeof OrganizationInvitationScalarFieldEnum)[keyof typeof OrganizationInvitationScalarFieldEnum]


  export const SystemTeamMemberScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemTeamMemberScalarFieldEnum = (typeof SystemTeamMemberScalarFieldEnum)[keyof typeof SystemTeamMemberScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SystemRole'
   */
  export type EnumSystemRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemRole'>
    


  /**
   * Reference to a field of type 'SystemRole[]'
   */
  export type ListEnumSystemRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OrganizationRole'
   */
  export type EnumOrganizationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizationRole'>
    


  /**
   * Reference to a field of type 'OrganizationRole[]'
   */
  export type ListEnumOrganizationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizationRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    organizationId?: StringNullableFilter<"User"> | string | null
    roles?: StringNullableListFilter<"User">
    systemRole?: EnumSystemRoleNullableFilter<"User"> | $Enums.SystemRole | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberships?: OrganizationMembershipListRelationFilter
    profiles?: OrganizationProfileListRelationFilter
    sentInvitations?: OrganizationInvitationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    roles?: SortOrder
    systemRole?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberships?: OrganizationMembershipOrderByRelationAggregateInput
    profiles?: OrganizationProfileOrderByRelationAggregateInput
    sentInvitations?: OrganizationInvitationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    organizationId?: StringNullableFilter<"User"> | string | null
    roles?: StringNullableListFilter<"User">
    systemRole?: EnumSystemRoleNullableFilter<"User"> | $Enums.SystemRole | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberships?: OrganizationMembershipListRelationFilter
    profiles?: OrganizationProfileListRelationFilter
    sentInvitations?: OrganizationInvitationListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    roles?: SortOrder
    systemRole?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    organizationId?: StringNullableWithAggregatesFilter<"User"> | string | null
    roles?: StringNullableListFilter<"User">
    systemRole?: EnumSystemRoleNullableWithAggregatesFilter<"User"> | $Enums.SystemRole | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OrganizationMembershipWhereInput = {
    AND?: OrganizationMembershipWhereInput | OrganizationMembershipWhereInput[]
    OR?: OrganizationMembershipWhereInput[]
    NOT?: OrganizationMembershipWhereInput | OrganizationMembershipWhereInput[]
    id?: StringFilter<"OrganizationMembership"> | string
    userId?: StringFilter<"OrganizationMembership"> | string
    organizationId?: StringFilter<"OrganizationMembership"> | string
    role?: EnumOrganizationRoleFilter<"OrganizationMembership"> | $Enums.OrganizationRole
    createdAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type OrganizationMembershipOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type OrganizationMembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_organizationId?: OrganizationMembershipUserIdOrganizationIdCompoundUniqueInput
    AND?: OrganizationMembershipWhereInput | OrganizationMembershipWhereInput[]
    OR?: OrganizationMembershipWhereInput[]
    NOT?: OrganizationMembershipWhereInput | OrganizationMembershipWhereInput[]
    userId?: StringFilter<"OrganizationMembership"> | string
    organizationId?: StringFilter<"OrganizationMembership"> | string
    role?: EnumOrganizationRoleFilter<"OrganizationMembership"> | $Enums.OrganizationRole
    createdAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "userId_organizationId">

  export type OrganizationMembershipOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationMembershipCountOrderByAggregateInput
    _max?: OrganizationMembershipMaxOrderByAggregateInput
    _min?: OrganizationMembershipMinOrderByAggregateInput
  }

  export type OrganizationMembershipScalarWhereWithAggregatesInput = {
    AND?: OrganizationMembershipScalarWhereWithAggregatesInput | OrganizationMembershipScalarWhereWithAggregatesInput[]
    OR?: OrganizationMembershipScalarWhereWithAggregatesInput[]
    NOT?: OrganizationMembershipScalarWhereWithAggregatesInput | OrganizationMembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationMembership"> | string
    userId?: StringWithAggregatesFilter<"OrganizationMembership"> | string
    organizationId?: StringWithAggregatesFilter<"OrganizationMembership"> | string
    role?: EnumOrganizationRoleWithAggregatesFilter<"OrganizationMembership"> | $Enums.OrganizationRole
    createdAt?: DateTimeWithAggregatesFilter<"OrganizationMembership"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrganizationMembership"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    address?: StringNullableFilter<"Organization"> | string | null
    managerName?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    memberships?: OrganizationMembershipListRelationFilter
    qrScanners?: QrScannerListRelationFilter
    profiles?: OrganizationProfileListRelationFilter
    invitations?: OrganizationInvitationListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    managerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberships?: OrganizationMembershipOrderByRelationAggregateInput
    qrScanners?: QrScannerOrderByRelationAggregateInput
    profiles?: OrganizationProfileOrderByRelationAggregateInput
    invitations?: OrganizationInvitationOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    address?: StringNullableFilter<"Organization"> | string | null
    managerName?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    memberships?: OrganizationMembershipListRelationFilter
    qrScanners?: QrScannerListRelationFilter
    profiles?: OrganizationProfileListRelationFilter
    invitations?: OrganizationInvitationListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    managerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    address?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    managerName?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type OrganizationProfileWhereInput = {
    AND?: OrganizationProfileWhereInput | OrganizationProfileWhereInput[]
    OR?: OrganizationProfileWhereInput[]
    NOT?: OrganizationProfileWhereInput | OrganizationProfileWhereInput[]
    id?: StringFilter<"OrganizationProfile"> | string
    userId?: StringFilter<"OrganizationProfile"> | string
    organizationId?: StringFilter<"OrganizationProfile"> | string
    displayName?: StringNullableFilter<"OrganizationProfile"> | string | null
    department?: StringNullableFilter<"OrganizationProfile"> | string | null
    createdAt?: DateTimeFilter<"OrganizationProfile"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type OrganizationProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    displayName?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type OrganizationProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_organizationId?: OrganizationProfileUserIdOrganizationIdCompoundUniqueInput
    AND?: OrganizationProfileWhereInput | OrganizationProfileWhereInput[]
    OR?: OrganizationProfileWhereInput[]
    NOT?: OrganizationProfileWhereInput | OrganizationProfileWhereInput[]
    userId?: StringFilter<"OrganizationProfile"> | string
    organizationId?: StringFilter<"OrganizationProfile"> | string
    displayName?: StringNullableFilter<"OrganizationProfile"> | string | null
    department?: StringNullableFilter<"OrganizationProfile"> | string | null
    createdAt?: DateTimeFilter<"OrganizationProfile"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "userId_organizationId">

  export type OrganizationProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    displayName?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationProfileCountOrderByAggregateInput
    _max?: OrganizationProfileMaxOrderByAggregateInput
    _min?: OrganizationProfileMinOrderByAggregateInput
  }

  export type OrganizationProfileScalarWhereWithAggregatesInput = {
    AND?: OrganizationProfileScalarWhereWithAggregatesInput | OrganizationProfileScalarWhereWithAggregatesInput[]
    OR?: OrganizationProfileScalarWhereWithAggregatesInput[]
    NOT?: OrganizationProfileScalarWhereWithAggregatesInput | OrganizationProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationProfile"> | string
    userId?: StringWithAggregatesFilter<"OrganizationProfile"> | string
    organizationId?: StringWithAggregatesFilter<"OrganizationProfile"> | string
    displayName?: StringNullableWithAggregatesFilter<"OrganizationProfile"> | string | null
    department?: StringNullableWithAggregatesFilter<"OrganizationProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrganizationProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrganizationProfile"> | Date | string
  }

  export type QrScannerWhereInput = {
    AND?: QrScannerWhereInput | QrScannerWhereInput[]
    OR?: QrScannerWhereInput[]
    NOT?: QrScannerWhereInput | QrScannerWhereInput[]
    id?: StringFilter<"QrScanner"> | string
    organizationId?: StringFilter<"QrScanner"> | string
    name?: StringFilter<"QrScanner"> | string
    location?: StringNullableFilter<"QrScanner"> | string | null
    scannerId?: StringFilter<"QrScanner"> | string
    password?: StringFilter<"QrScanner"> | string
    status?: StringFilter<"QrScanner"> | string
    lastActive?: DateTimeNullableFilter<"QrScanner"> | Date | string | null
    createdAt?: DateTimeFilter<"QrScanner"> | Date | string
    updatedAt?: DateTimeFilter<"QrScanner"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type QrScannerOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    scannerId?: SortOrder
    password?: SortOrder
    status?: SortOrder
    lastActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type QrScannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    scannerId?: string
    AND?: QrScannerWhereInput | QrScannerWhereInput[]
    OR?: QrScannerWhereInput[]
    NOT?: QrScannerWhereInput | QrScannerWhereInput[]
    organizationId?: StringFilter<"QrScanner"> | string
    name?: StringFilter<"QrScanner"> | string
    location?: StringNullableFilter<"QrScanner"> | string | null
    password?: StringFilter<"QrScanner"> | string
    status?: StringFilter<"QrScanner"> | string
    lastActive?: DateTimeNullableFilter<"QrScanner"> | Date | string | null
    createdAt?: DateTimeFilter<"QrScanner"> | Date | string
    updatedAt?: DateTimeFilter<"QrScanner"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "scannerId">

  export type QrScannerOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    scannerId?: SortOrder
    password?: SortOrder
    status?: SortOrder
    lastActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QrScannerCountOrderByAggregateInput
    _max?: QrScannerMaxOrderByAggregateInput
    _min?: QrScannerMinOrderByAggregateInput
  }

  export type QrScannerScalarWhereWithAggregatesInput = {
    AND?: QrScannerScalarWhereWithAggregatesInput | QrScannerScalarWhereWithAggregatesInput[]
    OR?: QrScannerScalarWhereWithAggregatesInput[]
    NOT?: QrScannerScalarWhereWithAggregatesInput | QrScannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QrScanner"> | string
    organizationId?: StringWithAggregatesFilter<"QrScanner"> | string
    name?: StringWithAggregatesFilter<"QrScanner"> | string
    location?: StringNullableWithAggregatesFilter<"QrScanner"> | string | null
    scannerId?: StringWithAggregatesFilter<"QrScanner"> | string
    password?: StringWithAggregatesFilter<"QrScanner"> | string
    status?: StringWithAggregatesFilter<"QrScanner"> | string
    lastActive?: DateTimeNullableWithAggregatesFilter<"QrScanner"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QrScanner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QrScanner"> | Date | string
  }

  export type OrganizationInvitationWhereInput = {
    AND?: OrganizationInvitationWhereInput | OrganizationInvitationWhereInput[]
    OR?: OrganizationInvitationWhereInput[]
    NOT?: OrganizationInvitationWhereInput | OrganizationInvitationWhereInput[]
    id?: StringFilter<"OrganizationInvitation"> | string
    email?: StringFilter<"OrganizationInvitation"> | string
    organizationId?: StringFilter<"OrganizationInvitation"> | string
    role?: EnumOrganizationRoleFilter<"OrganizationInvitation"> | $Enums.OrganizationRole
    expiresAt?: DateTimeFilter<"OrganizationInvitation"> | Date | string
    invitedBy?: StringFilter<"OrganizationInvitation"> | string
    createdAt?: DateTimeFilter<"OrganizationInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationInvitation"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrganizationInvitationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    expiresAt?: SortOrder
    invitedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    inviter?: UserOrderByWithRelationInput
  }

  export type OrganizationInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_organizationId?: OrganizationInvitationEmailOrganizationIdCompoundUniqueInput
    AND?: OrganizationInvitationWhereInput | OrganizationInvitationWhereInput[]
    OR?: OrganizationInvitationWhereInput[]
    NOT?: OrganizationInvitationWhereInput | OrganizationInvitationWhereInput[]
    email?: StringFilter<"OrganizationInvitation"> | string
    organizationId?: StringFilter<"OrganizationInvitation"> | string
    role?: EnumOrganizationRoleFilter<"OrganizationInvitation"> | $Enums.OrganizationRole
    expiresAt?: DateTimeFilter<"OrganizationInvitation"> | Date | string
    invitedBy?: StringFilter<"OrganizationInvitation"> | string
    createdAt?: DateTimeFilter<"OrganizationInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationInvitation"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "email_organizationId">

  export type OrganizationInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    expiresAt?: SortOrder
    invitedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationInvitationCountOrderByAggregateInput
    _max?: OrganizationInvitationMaxOrderByAggregateInput
    _min?: OrganizationInvitationMinOrderByAggregateInput
  }

  export type OrganizationInvitationScalarWhereWithAggregatesInput = {
    AND?: OrganizationInvitationScalarWhereWithAggregatesInput | OrganizationInvitationScalarWhereWithAggregatesInput[]
    OR?: OrganizationInvitationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationInvitationScalarWhereWithAggregatesInput | OrganizationInvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationInvitation"> | string
    email?: StringWithAggregatesFilter<"OrganizationInvitation"> | string
    organizationId?: StringWithAggregatesFilter<"OrganizationInvitation"> | string
    role?: EnumOrganizationRoleWithAggregatesFilter<"OrganizationInvitation"> | $Enums.OrganizationRole
    expiresAt?: DateTimeWithAggregatesFilter<"OrganizationInvitation"> | Date | string
    invitedBy?: StringWithAggregatesFilter<"OrganizationInvitation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrganizationInvitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrganizationInvitation"> | Date | string
  }

  export type SystemTeamMemberWhereInput = {
    AND?: SystemTeamMemberWhereInput | SystemTeamMemberWhereInput[]
    OR?: SystemTeamMemberWhereInput[]
    NOT?: SystemTeamMemberWhereInput | SystemTeamMemberWhereInput[]
    id?: StringFilter<"SystemTeamMember"> | string
    clerkId?: StringFilter<"SystemTeamMember"> | string
    role?: StringFilter<"SystemTeamMember"> | string
    createdAt?: DateTimeFilter<"SystemTeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"SystemTeamMember"> | Date | string
  }

  export type SystemTeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemTeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    AND?: SystemTeamMemberWhereInput | SystemTeamMemberWhereInput[]
    OR?: SystemTeamMemberWhereInput[]
    NOT?: SystemTeamMemberWhereInput | SystemTeamMemberWhereInput[]
    role?: StringFilter<"SystemTeamMember"> | string
    createdAt?: DateTimeFilter<"SystemTeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"SystemTeamMember"> | Date | string
  }, "id" | "clerkId">

  export type SystemTeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemTeamMemberCountOrderByAggregateInput
    _max?: SystemTeamMemberMaxOrderByAggregateInput
    _min?: SystemTeamMemberMinOrderByAggregateInput
  }

  export type SystemTeamMemberScalarWhereWithAggregatesInput = {
    AND?: SystemTeamMemberScalarWhereWithAggregatesInput | SystemTeamMemberScalarWhereWithAggregatesInput[]
    OR?: SystemTeamMemberScalarWhereWithAggregatesInput[]
    NOT?: SystemTeamMemberScalarWhereWithAggregatesInput | SystemTeamMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemTeamMember"> | string
    clerkId?: StringWithAggregatesFilter<"SystemTeamMember"> | string
    role?: StringWithAggregatesFilter<"SystemTeamMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SystemTeamMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemTeamMember"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    organizationId?: string | null
    roles?: UserCreaterolesInput | string[]
    systemRole?: $Enums.SystemRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipCreateNestedManyWithoutUserInput
    profiles?: OrganizationProfileCreateNestedManyWithoutUserInput
    sentInvitations?: OrganizationInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    organizationId?: string | null
    roles?: UserCreaterolesInput | string[]
    systemRole?: $Enums.SystemRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipUncheckedCreateNestedManyWithoutUserInput
    profiles?: OrganizationProfileUncheckedCreateNestedManyWithoutUserInput
    sentInvitations?: OrganizationInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    systemRole?: NullableEnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUpdateManyWithoutUserNestedInput
    profiles?: OrganizationProfileUpdateManyWithoutUserNestedInput
    sentInvitations?: OrganizationInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    systemRole?: NullableEnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUncheckedUpdateManyWithoutUserNestedInput
    profiles?: OrganizationProfileUncheckedUpdateManyWithoutUserNestedInput
    sentInvitations?: OrganizationInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    organizationId?: string | null
    roles?: UserCreaterolesInput | string[]
    systemRole?: $Enums.SystemRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    systemRole?: NullableEnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    systemRole?: NullableEnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipCreateInput = {
    id?: string
    role: $Enums.OrganizationRole
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    organization: OrganizationCreateNestedOneWithoutMembershipsInput
  }

  export type OrganizationMembershipUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId: string
    role: $Enums.OrganizationRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type OrganizationMembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipCreateManyInput = {
    id?: string
    userId: string
    organizationId: string
    role: $Enums.OrganizationRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    address?: string | null
    managerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipCreateNestedManyWithoutOrganizationInput
    qrScanners?: QrScannerCreateNestedManyWithoutOrganizationInput
    profiles?: OrganizationProfileCreateNestedManyWithoutOrganizationInput
    invitations?: OrganizationInvitationCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    managerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput
    qrScanners?: QrScannerUncheckedCreateNestedManyWithoutOrganizationInput
    profiles?: OrganizationProfileUncheckedCreateNestedManyWithoutOrganizationInput
    invitations?: OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUpdateManyWithoutOrganizationNestedInput
    qrScanners?: QrScannerUpdateManyWithoutOrganizationNestedInput
    profiles?: OrganizationProfileUpdateManyWithoutOrganizationNestedInput
    invitations?: OrganizationInvitationUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput
    qrScanners?: QrScannerUncheckedUpdateManyWithoutOrganizationNestedInput
    profiles?: OrganizationProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    invitations?: OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    managerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationProfileCreateInput = {
    id?: string
    displayName?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfilesInput
    organization: OrganizationCreateNestedOneWithoutProfilesInput
  }

  export type OrganizationProfileUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId: string
    displayName?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfilesNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type OrganizationProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationProfileCreateManyInput = {
    id?: string
    userId: string
    organizationId: string
    displayName?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrScannerCreateInput = {
    id?: string
    name: string
    location?: string | null
    scannerId: string
    password: string
    status?: string
    lastActive?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutQrScannersInput
  }

  export type QrScannerUncheckedCreateInput = {
    id?: string
    organizationId: string
    name: string
    location?: string | null
    scannerId: string
    password: string
    status?: string
    lastActive?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QrScannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    scannerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutQrScannersNestedInput
  }

  export type QrScannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    scannerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrScannerCreateManyInput = {
    id?: string
    organizationId: string
    name: string
    location?: string | null
    scannerId: string
    password: string
    status?: string
    lastActive?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QrScannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    scannerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrScannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    scannerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationInvitationCreateInput = {
    id?: string
    email: string
    role?: $Enums.OrganizationRole
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutInvitationsInput
    inviter: UserCreateNestedOneWithoutSentInvitationsInput
  }

  export type OrganizationInvitationUncheckedCreateInput = {
    id?: string
    email: string
    organizationId: string
    role?: $Enums.OrganizationRole
    expiresAt: Date | string
    invitedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutInvitationsNestedInput
    inviter?: UserUpdateOneRequiredWithoutSentInvitationsNestedInput
  }

  export type OrganizationInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationInvitationCreateManyInput = {
    id?: string
    email: string
    organizationId: string
    role?: $Enums.OrganizationRole
    expiresAt: Date | string
    invitedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemTeamMemberCreateInput = {
    id?: string
    clerkId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemTeamMemberUncheckedCreateInput = {
    id?: string
    clerkId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemTeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemTeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemTeamMemberCreateManyInput = {
    id?: string
    clerkId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemTeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemTeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumSystemRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRole | EnumSystemRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemRoleNullableFilter<$PrismaModel> | $Enums.SystemRole | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrganizationMembershipListRelationFilter = {
    every?: OrganizationMembershipWhereInput
    some?: OrganizationMembershipWhereInput
    none?: OrganizationMembershipWhereInput
  }

  export type OrganizationProfileListRelationFilter = {
    every?: OrganizationProfileWhereInput
    some?: OrganizationProfileWhereInput
    none?: OrganizationProfileWhereInput
  }

  export type OrganizationInvitationListRelationFilter = {
    every?: OrganizationInvitationWhereInput
    some?: OrganizationInvitationWhereInput
    none?: OrganizationInvitationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrganizationMembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    organizationId?: SortOrder
    roles?: SortOrder
    systemRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    organizationId?: SortOrder
    systemRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    organizationId?: SortOrder
    systemRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSystemRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRole | EnumSystemRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.SystemRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSystemRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumSystemRoleNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleFilter<$PrismaModel> | $Enums.OrganizationRole
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OrganizationMembershipUserIdOrganizationIdCompoundUniqueInput = {
    userId: string
    organizationId: string
  }

  export type OrganizationMembershipCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMembershipMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumOrganizationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganizationRoleFilter<$PrismaModel>
    _max?: NestedEnumOrganizationRoleFilter<$PrismaModel>
  }

  export type QrScannerListRelationFilter = {
    every?: QrScannerWhereInput
    some?: QrScannerWhereInput
    none?: QrScannerWhereInput
  }

  export type QrScannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    managerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    managerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    managerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationProfileUserIdOrganizationIdCompoundUniqueInput = {
    userId: string
    organizationId: string
  }

  export type OrganizationProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    displayName?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    displayName?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    displayName?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type QrScannerCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    scannerId?: SortOrder
    password?: SortOrder
    status?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QrScannerMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    scannerId?: SortOrder
    password?: SortOrder
    status?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QrScannerMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    scannerId?: SortOrder
    password?: SortOrder
    status?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrganizationInvitationEmailOrganizationIdCompoundUniqueInput = {
    email: string
    organizationId: string
  }

  export type OrganizationInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    expiresAt?: SortOrder
    invitedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    expiresAt?: SortOrder
    invitedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    expiresAt?: SortOrder
    invitedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemTeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemTeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemTeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreaterolesInput = {
    set: string[]
  }

  export type OrganizationMembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput> | OrganizationMembershipCreateWithoutUserInput[] | OrganizationMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutUserInput | OrganizationMembershipCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMembershipCreateManyUserInputEnvelope
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
  }

  export type OrganizationProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput> | OrganizationProfileCreateWithoutUserInput[] | OrganizationProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutUserInput | OrganizationProfileCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationProfileCreateManyUserInputEnvelope
    connect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
  }

  export type OrganizationInvitationCreateNestedManyWithoutInviterInput = {
    create?: XOR<OrganizationInvitationCreateWithoutInviterInput, OrganizationInvitationUncheckedCreateWithoutInviterInput> | OrganizationInvitationCreateWithoutInviterInput[] | OrganizationInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: OrganizationInvitationCreateOrConnectWithoutInviterInput | OrganizationInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: OrganizationInvitationCreateManyInviterInputEnvelope
    connect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
  }

  export type OrganizationMembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput> | OrganizationMembershipCreateWithoutUserInput[] | OrganizationMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutUserInput | OrganizationMembershipCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMembershipCreateManyUserInputEnvelope
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
  }

  export type OrganizationProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput> | OrganizationProfileCreateWithoutUserInput[] | OrganizationProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutUserInput | OrganizationProfileCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationProfileCreateManyUserInputEnvelope
    connect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
  }

  export type OrganizationInvitationUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<OrganizationInvitationCreateWithoutInviterInput, OrganizationInvitationUncheckedCreateWithoutInviterInput> | OrganizationInvitationCreateWithoutInviterInput[] | OrganizationInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: OrganizationInvitationCreateOrConnectWithoutInviterInput | OrganizationInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: OrganizationInvitationCreateManyInviterInputEnvelope
    connect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdaterolesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableEnumSystemRoleFieldUpdateOperationsInput = {
    set?: $Enums.SystemRole | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationMembershipUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput> | OrganizationMembershipCreateWithoutUserInput[] | OrganizationMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutUserInput | OrganizationMembershipCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput | OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMembershipCreateManyUserInputEnvelope
    set?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    disconnect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    delete?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    update?: OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput | OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMembershipUpdateManyWithWhereWithoutUserInput | OrganizationMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
  }

  export type OrganizationProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput> | OrganizationProfileCreateWithoutUserInput[] | OrganizationProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutUserInput | OrganizationProfileCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationProfileUpsertWithWhereUniqueWithoutUserInput | OrganizationProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationProfileCreateManyUserInputEnvelope
    set?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    disconnect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    delete?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    connect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    update?: OrganizationProfileUpdateWithWhereUniqueWithoutUserInput | OrganizationProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationProfileUpdateManyWithWhereWithoutUserInput | OrganizationProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationProfileScalarWhereInput | OrganizationProfileScalarWhereInput[]
  }

  export type OrganizationInvitationUpdateManyWithoutInviterNestedInput = {
    create?: XOR<OrganizationInvitationCreateWithoutInviterInput, OrganizationInvitationUncheckedCreateWithoutInviterInput> | OrganizationInvitationCreateWithoutInviterInput[] | OrganizationInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: OrganizationInvitationCreateOrConnectWithoutInviterInput | OrganizationInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: OrganizationInvitationUpsertWithWhereUniqueWithoutInviterInput | OrganizationInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: OrganizationInvitationCreateManyInviterInputEnvelope
    set?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    disconnect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    delete?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    connect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    update?: OrganizationInvitationUpdateWithWhereUniqueWithoutInviterInput | OrganizationInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: OrganizationInvitationUpdateManyWithWhereWithoutInviterInput | OrganizationInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: OrganizationInvitationScalarWhereInput | OrganizationInvitationScalarWhereInput[]
  }

  export type OrganizationMembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput> | OrganizationMembershipCreateWithoutUserInput[] | OrganizationMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutUserInput | OrganizationMembershipCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput | OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMembershipCreateManyUserInputEnvelope
    set?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    disconnect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    delete?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    update?: OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput | OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMembershipUpdateManyWithWhereWithoutUserInput | OrganizationMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
  }

  export type OrganizationProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput> | OrganizationProfileCreateWithoutUserInput[] | OrganizationProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutUserInput | OrganizationProfileCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationProfileUpsertWithWhereUniqueWithoutUserInput | OrganizationProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationProfileCreateManyUserInputEnvelope
    set?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    disconnect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    delete?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    connect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    update?: OrganizationProfileUpdateWithWhereUniqueWithoutUserInput | OrganizationProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationProfileUpdateManyWithWhereWithoutUserInput | OrganizationProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationProfileScalarWhereInput | OrganizationProfileScalarWhereInput[]
  }

  export type OrganizationInvitationUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<OrganizationInvitationCreateWithoutInviterInput, OrganizationInvitationUncheckedCreateWithoutInviterInput> | OrganizationInvitationCreateWithoutInviterInput[] | OrganizationInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: OrganizationInvitationCreateOrConnectWithoutInviterInput | OrganizationInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: OrganizationInvitationUpsertWithWhereUniqueWithoutInviterInput | OrganizationInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: OrganizationInvitationCreateManyInviterInputEnvelope
    set?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    disconnect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    delete?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    connect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    update?: OrganizationInvitationUpdateWithWhereUniqueWithoutInviterInput | OrganizationInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: OrganizationInvitationUpdateManyWithWhereWithoutInviterInput | OrganizationInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: OrganizationInvitationScalarWhereInput | OrganizationInvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembershipsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EnumOrganizationRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationRole
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type OrganizationUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembershipsInput
    upsert?: OrganizationUpsertWithoutMembershipsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembershipsInput, OrganizationUpdateWithoutMembershipsInput>, OrganizationUncheckedUpdateWithoutMembershipsInput>
  }

  export type OrganizationMembershipCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | OrganizationMembershipCreateWithoutOrganizationInput[] | OrganizationMembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutOrganizationInput | OrganizationMembershipCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMembershipCreateManyOrganizationInputEnvelope
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
  }

  export type QrScannerCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<QrScannerCreateWithoutOrganizationInput, QrScannerUncheckedCreateWithoutOrganizationInput> | QrScannerCreateWithoutOrganizationInput[] | QrScannerUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: QrScannerCreateOrConnectWithoutOrganizationInput | QrScannerCreateOrConnectWithoutOrganizationInput[]
    createMany?: QrScannerCreateManyOrganizationInputEnvelope
    connect?: QrScannerWhereUniqueInput | QrScannerWhereUniqueInput[]
  }

  export type OrganizationProfileCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationProfileCreateWithoutOrganizationInput, OrganizationProfileUncheckedCreateWithoutOrganizationInput> | OrganizationProfileCreateWithoutOrganizationInput[] | OrganizationProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutOrganizationInput | OrganizationProfileCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationProfileCreateManyOrganizationInputEnvelope
    connect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
  }

  export type OrganizationInvitationCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationInvitationCreateWithoutOrganizationInput, OrganizationInvitationUncheckedCreateWithoutOrganizationInput> | OrganizationInvitationCreateWithoutOrganizationInput[] | OrganizationInvitationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationInvitationCreateOrConnectWithoutOrganizationInput | OrganizationInvitationCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationInvitationCreateManyOrganizationInputEnvelope
    connect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
  }

  export type OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | OrganizationMembershipCreateWithoutOrganizationInput[] | OrganizationMembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutOrganizationInput | OrganizationMembershipCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMembershipCreateManyOrganizationInputEnvelope
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
  }

  export type QrScannerUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<QrScannerCreateWithoutOrganizationInput, QrScannerUncheckedCreateWithoutOrganizationInput> | QrScannerCreateWithoutOrganizationInput[] | QrScannerUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: QrScannerCreateOrConnectWithoutOrganizationInput | QrScannerCreateOrConnectWithoutOrganizationInput[]
    createMany?: QrScannerCreateManyOrganizationInputEnvelope
    connect?: QrScannerWhereUniqueInput | QrScannerWhereUniqueInput[]
  }

  export type OrganizationProfileUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationProfileCreateWithoutOrganizationInput, OrganizationProfileUncheckedCreateWithoutOrganizationInput> | OrganizationProfileCreateWithoutOrganizationInput[] | OrganizationProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutOrganizationInput | OrganizationProfileCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationProfileCreateManyOrganizationInputEnvelope
    connect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
  }

  export type OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationInvitationCreateWithoutOrganizationInput, OrganizationInvitationUncheckedCreateWithoutOrganizationInput> | OrganizationInvitationCreateWithoutOrganizationInput[] | OrganizationInvitationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationInvitationCreateOrConnectWithoutOrganizationInput | OrganizationInvitationCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationInvitationCreateManyOrganizationInputEnvelope
    connect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
  }

  export type OrganizationMembershipUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | OrganizationMembershipCreateWithoutOrganizationInput[] | OrganizationMembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutOrganizationInput | OrganizationMembershipCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMembershipCreateManyOrganizationInputEnvelope
    set?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    disconnect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    delete?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    update?: OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput | OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
  }

  export type QrScannerUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<QrScannerCreateWithoutOrganizationInput, QrScannerUncheckedCreateWithoutOrganizationInput> | QrScannerCreateWithoutOrganizationInput[] | QrScannerUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: QrScannerCreateOrConnectWithoutOrganizationInput | QrScannerCreateOrConnectWithoutOrganizationInput[]
    upsert?: QrScannerUpsertWithWhereUniqueWithoutOrganizationInput | QrScannerUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: QrScannerCreateManyOrganizationInputEnvelope
    set?: QrScannerWhereUniqueInput | QrScannerWhereUniqueInput[]
    disconnect?: QrScannerWhereUniqueInput | QrScannerWhereUniqueInput[]
    delete?: QrScannerWhereUniqueInput | QrScannerWhereUniqueInput[]
    connect?: QrScannerWhereUniqueInput | QrScannerWhereUniqueInput[]
    update?: QrScannerUpdateWithWhereUniqueWithoutOrganizationInput | QrScannerUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: QrScannerUpdateManyWithWhereWithoutOrganizationInput | QrScannerUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: QrScannerScalarWhereInput | QrScannerScalarWhereInput[]
  }

  export type OrganizationProfileUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationProfileCreateWithoutOrganizationInput, OrganizationProfileUncheckedCreateWithoutOrganizationInput> | OrganizationProfileCreateWithoutOrganizationInput[] | OrganizationProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutOrganizationInput | OrganizationProfileCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationProfileUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationProfileUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationProfileCreateManyOrganizationInputEnvelope
    set?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    disconnect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    delete?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    connect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    update?: OrganizationProfileUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationProfileUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationProfileUpdateManyWithWhereWithoutOrganizationInput | OrganizationProfileUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationProfileScalarWhereInput | OrganizationProfileScalarWhereInput[]
  }

  export type OrganizationInvitationUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationInvitationCreateWithoutOrganizationInput, OrganizationInvitationUncheckedCreateWithoutOrganizationInput> | OrganizationInvitationCreateWithoutOrganizationInput[] | OrganizationInvitationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationInvitationCreateOrConnectWithoutOrganizationInput | OrganizationInvitationCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationInvitationUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationInvitationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationInvitationCreateManyOrganizationInputEnvelope
    set?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    disconnect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    delete?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    connect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    update?: OrganizationInvitationUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationInvitationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationInvitationUpdateManyWithWhereWithoutOrganizationInput | OrganizationInvitationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationInvitationScalarWhereInput | OrganizationInvitationScalarWhereInput[]
  }

  export type OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | OrganizationMembershipCreateWithoutOrganizationInput[] | OrganizationMembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutOrganizationInput | OrganizationMembershipCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMembershipCreateManyOrganizationInputEnvelope
    set?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    disconnect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    delete?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    update?: OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput | OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
  }

  export type QrScannerUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<QrScannerCreateWithoutOrganizationInput, QrScannerUncheckedCreateWithoutOrganizationInput> | QrScannerCreateWithoutOrganizationInput[] | QrScannerUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: QrScannerCreateOrConnectWithoutOrganizationInput | QrScannerCreateOrConnectWithoutOrganizationInput[]
    upsert?: QrScannerUpsertWithWhereUniqueWithoutOrganizationInput | QrScannerUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: QrScannerCreateManyOrganizationInputEnvelope
    set?: QrScannerWhereUniqueInput | QrScannerWhereUniqueInput[]
    disconnect?: QrScannerWhereUniqueInput | QrScannerWhereUniqueInput[]
    delete?: QrScannerWhereUniqueInput | QrScannerWhereUniqueInput[]
    connect?: QrScannerWhereUniqueInput | QrScannerWhereUniqueInput[]
    update?: QrScannerUpdateWithWhereUniqueWithoutOrganizationInput | QrScannerUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: QrScannerUpdateManyWithWhereWithoutOrganizationInput | QrScannerUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: QrScannerScalarWhereInput | QrScannerScalarWhereInput[]
  }

  export type OrganizationProfileUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationProfileCreateWithoutOrganizationInput, OrganizationProfileUncheckedCreateWithoutOrganizationInput> | OrganizationProfileCreateWithoutOrganizationInput[] | OrganizationProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutOrganizationInput | OrganizationProfileCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationProfileUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationProfileUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationProfileCreateManyOrganizationInputEnvelope
    set?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    disconnect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    delete?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    connect?: OrganizationProfileWhereUniqueInput | OrganizationProfileWhereUniqueInput[]
    update?: OrganizationProfileUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationProfileUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationProfileUpdateManyWithWhereWithoutOrganizationInput | OrganizationProfileUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationProfileScalarWhereInput | OrganizationProfileScalarWhereInput[]
  }

  export type OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationInvitationCreateWithoutOrganizationInput, OrganizationInvitationUncheckedCreateWithoutOrganizationInput> | OrganizationInvitationCreateWithoutOrganizationInput[] | OrganizationInvitationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationInvitationCreateOrConnectWithoutOrganizationInput | OrganizationInvitationCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationInvitationUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationInvitationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationInvitationCreateManyOrganizationInputEnvelope
    set?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    disconnect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    delete?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    connect?: OrganizationInvitationWhereUniqueInput | OrganizationInvitationWhereUniqueInput[]
    update?: OrganizationInvitationUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationInvitationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationInvitationUpdateManyWithWhereWithoutOrganizationInput | OrganizationInvitationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationInvitationScalarWhereInput | OrganizationInvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfilesInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutProfilesInput = {
    create?: XOR<OrganizationCreateWithoutProfilesInput, OrganizationUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfilesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    upsert?: UserUpsertWithoutProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfilesInput, UserUpdateWithoutProfilesInput>, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type OrganizationUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<OrganizationCreateWithoutProfilesInput, OrganizationUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfilesInput
    upsert?: OrganizationUpsertWithoutProfilesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutProfilesInput, OrganizationUpdateWithoutProfilesInput>, OrganizationUncheckedUpdateWithoutProfilesInput>
  }

  export type OrganizationCreateNestedOneWithoutQrScannersInput = {
    create?: XOR<OrganizationCreateWithoutQrScannersInput, OrganizationUncheckedCreateWithoutQrScannersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutQrScannersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrganizationUpdateOneRequiredWithoutQrScannersNestedInput = {
    create?: XOR<OrganizationCreateWithoutQrScannersInput, OrganizationUncheckedCreateWithoutQrScannersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutQrScannersInput
    upsert?: OrganizationUpsertWithoutQrScannersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutQrScannersInput, OrganizationUpdateWithoutQrScannersInput>, OrganizationUncheckedUpdateWithoutQrScannersInput>
  }

  export type OrganizationCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<OrganizationCreateWithoutInvitationsInput, OrganizationUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInvitationsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentInvitationsInput = {
    create?: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<OrganizationCreateWithoutInvitationsInput, OrganizationUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInvitationsInput
    upsert?: OrganizationUpsertWithoutInvitationsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutInvitationsInput, OrganizationUpdateWithoutInvitationsInput>, OrganizationUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneRequiredWithoutSentInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitationsInput
    upsert?: UserUpsertWithoutSentInvitationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentInvitationsInput, UserUpdateWithoutSentInvitationsInput>, UserUncheckedUpdateWithoutSentInvitationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSystemRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRole | EnumSystemRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemRoleNullableFilter<$PrismaModel> | $Enums.SystemRole | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSystemRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRole | EnumSystemRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.SystemRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSystemRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumSystemRoleNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleFilter<$PrismaModel> | $Enums.OrganizationRole
  }

  export type NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganizationRoleFilter<$PrismaModel>
    _max?: NestedEnumOrganizationRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrganizationMembershipCreateWithoutUserInput = {
    id?: string
    role: $Enums.OrganizationRole
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMembershipsInput
  }

  export type OrganizationMembershipUncheckedCreateWithoutUserInput = {
    id?: string
    organizationId: string
    role: $Enums.OrganizationRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipCreateOrConnectWithoutUserInput = {
    where: OrganizationMembershipWhereUniqueInput
    create: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMembershipCreateManyUserInputEnvelope = {
    data: OrganizationMembershipCreateManyUserInput | OrganizationMembershipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationProfileCreateWithoutUserInput = {
    id?: string
    displayName?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutProfilesInput
  }

  export type OrganizationProfileUncheckedCreateWithoutUserInput = {
    id?: string
    organizationId: string
    displayName?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationProfileCreateOrConnectWithoutUserInput = {
    where: OrganizationProfileWhereUniqueInput
    create: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput>
  }

  export type OrganizationProfileCreateManyUserInputEnvelope = {
    data: OrganizationProfileCreateManyUserInput | OrganizationProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationInvitationCreateWithoutInviterInput = {
    id?: string
    email: string
    role?: $Enums.OrganizationRole
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutInvitationsInput
  }

  export type OrganizationInvitationUncheckedCreateWithoutInviterInput = {
    id?: string
    email: string
    organizationId: string
    role?: $Enums.OrganizationRole
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationInvitationCreateOrConnectWithoutInviterInput = {
    where: OrganizationInvitationWhereUniqueInput
    create: XOR<OrganizationInvitationCreateWithoutInviterInput, OrganizationInvitationUncheckedCreateWithoutInviterInput>
  }

  export type OrganizationInvitationCreateManyInviterInputEnvelope = {
    data: OrganizationInvitationCreateManyInviterInput | OrganizationInvitationCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganizationMembershipWhereUniqueInput
    update: XOR<OrganizationMembershipUpdateWithoutUserInput, OrganizationMembershipUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganizationMembershipWhereUniqueInput
    data: XOR<OrganizationMembershipUpdateWithoutUserInput, OrganizationMembershipUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationMembershipUpdateManyWithWhereWithoutUserInput = {
    where: OrganizationMembershipScalarWhereInput
    data: XOR<OrganizationMembershipUpdateManyMutationInput, OrganizationMembershipUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganizationMembershipScalarWhereInput = {
    AND?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
    OR?: OrganizationMembershipScalarWhereInput[]
    NOT?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
    id?: StringFilter<"OrganizationMembership"> | string
    userId?: StringFilter<"OrganizationMembership"> | string
    organizationId?: StringFilter<"OrganizationMembership"> | string
    role?: EnumOrganizationRoleFilter<"OrganizationMembership"> | $Enums.OrganizationRole
    createdAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
  }

  export type OrganizationProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganizationProfileWhereUniqueInput
    update: XOR<OrganizationProfileUpdateWithoutUserInput, OrganizationProfileUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput>
  }

  export type OrganizationProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganizationProfileWhereUniqueInput
    data: XOR<OrganizationProfileUpdateWithoutUserInput, OrganizationProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationProfileUpdateManyWithWhereWithoutUserInput = {
    where: OrganizationProfileScalarWhereInput
    data: XOR<OrganizationProfileUpdateManyMutationInput, OrganizationProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganizationProfileScalarWhereInput = {
    AND?: OrganizationProfileScalarWhereInput | OrganizationProfileScalarWhereInput[]
    OR?: OrganizationProfileScalarWhereInput[]
    NOT?: OrganizationProfileScalarWhereInput | OrganizationProfileScalarWhereInput[]
    id?: StringFilter<"OrganizationProfile"> | string
    userId?: StringFilter<"OrganizationProfile"> | string
    organizationId?: StringFilter<"OrganizationProfile"> | string
    displayName?: StringNullableFilter<"OrganizationProfile"> | string | null
    department?: StringNullableFilter<"OrganizationProfile"> | string | null
    createdAt?: DateTimeFilter<"OrganizationProfile"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationProfile"> | Date | string
  }

  export type OrganizationInvitationUpsertWithWhereUniqueWithoutInviterInput = {
    where: OrganizationInvitationWhereUniqueInput
    update: XOR<OrganizationInvitationUpdateWithoutInviterInput, OrganizationInvitationUncheckedUpdateWithoutInviterInput>
    create: XOR<OrganizationInvitationCreateWithoutInviterInput, OrganizationInvitationUncheckedCreateWithoutInviterInput>
  }

  export type OrganizationInvitationUpdateWithWhereUniqueWithoutInviterInput = {
    where: OrganizationInvitationWhereUniqueInput
    data: XOR<OrganizationInvitationUpdateWithoutInviterInput, OrganizationInvitationUncheckedUpdateWithoutInviterInput>
  }

  export type OrganizationInvitationUpdateManyWithWhereWithoutInviterInput = {
    where: OrganizationInvitationScalarWhereInput
    data: XOR<OrganizationInvitationUpdateManyMutationInput, OrganizationInvitationUncheckedUpdateManyWithoutInviterInput>
  }

  export type OrganizationInvitationScalarWhereInput = {
    AND?: OrganizationInvitationScalarWhereInput | OrganizationInvitationScalarWhereInput[]
    OR?: OrganizationInvitationScalarWhereInput[]
    NOT?: OrganizationInvitationScalarWhereInput | OrganizationInvitationScalarWhereInput[]
    id?: StringFilter<"OrganizationInvitation"> | string
    email?: StringFilter<"OrganizationInvitation"> | string
    organizationId?: StringFilter<"OrganizationInvitation"> | string
    role?: EnumOrganizationRoleFilter<"OrganizationInvitation"> | $Enums.OrganizationRole
    expiresAt?: DateTimeFilter<"OrganizationInvitation"> | Date | string
    invitedBy?: StringFilter<"OrganizationInvitation"> | string
    createdAt?: DateTimeFilter<"OrganizationInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationInvitation"> | Date | string
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    organizationId?: string | null
    roles?: UserCreaterolesInput | string[]
    systemRole?: $Enums.SystemRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: OrganizationProfileCreateNestedManyWithoutUserInput
    sentInvitations?: OrganizationInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    organizationId?: string | null
    roles?: UserCreaterolesInput | string[]
    systemRole?: $Enums.SystemRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: OrganizationProfileUncheckedCreateNestedManyWithoutUserInput
    sentInvitations?: OrganizationInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type OrganizationCreateWithoutMembershipsInput = {
    id?: string
    name: string
    address?: string | null
    managerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrScanners?: QrScannerCreateNestedManyWithoutOrganizationInput
    profiles?: OrganizationProfileCreateNestedManyWithoutOrganizationInput
    invitations?: OrganizationInvitationCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    address?: string | null
    managerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrScanners?: QrScannerUncheckedCreateNestedManyWithoutOrganizationInput
    profiles?: OrganizationProfileUncheckedCreateNestedManyWithoutOrganizationInput
    invitations?: OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembershipsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    systemRole?: NullableEnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: OrganizationProfileUpdateManyWithoutUserNestedInput
    sentInvitations?: OrganizationInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    systemRole?: NullableEnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: OrganizationProfileUncheckedUpdateManyWithoutUserNestedInput
    sentInvitations?: OrganizationInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type OrganizationUpsertWithoutMembershipsInput = {
    update: XOR<OrganizationUpdateWithoutMembershipsInput, OrganizationUncheckedUpdateWithoutMembershipsInput>
    create: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembershipsInput, OrganizationUncheckedUpdateWithoutMembershipsInput>
  }

  export type OrganizationUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrScanners?: QrScannerUpdateManyWithoutOrganizationNestedInput
    profiles?: OrganizationProfileUpdateManyWithoutOrganizationNestedInput
    invitations?: OrganizationInvitationUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrScanners?: QrScannerUncheckedUpdateManyWithoutOrganizationNestedInput
    profiles?: OrganizationProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    invitations?: OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationMembershipCreateWithoutOrganizationInput = {
    id?: string
    role: $Enums.OrganizationRole
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type OrganizationMembershipUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    role: $Enums.OrganizationRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationMembershipWhereUniqueInput
    create: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMembershipCreateManyOrganizationInputEnvelope = {
    data: OrganizationMembershipCreateManyOrganizationInput | OrganizationMembershipCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type QrScannerCreateWithoutOrganizationInput = {
    id?: string
    name: string
    location?: string | null
    scannerId: string
    password: string
    status?: string
    lastActive?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QrScannerUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    location?: string | null
    scannerId: string
    password: string
    status?: string
    lastActive?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QrScannerCreateOrConnectWithoutOrganizationInput = {
    where: QrScannerWhereUniqueInput
    create: XOR<QrScannerCreateWithoutOrganizationInput, QrScannerUncheckedCreateWithoutOrganizationInput>
  }

  export type QrScannerCreateManyOrganizationInputEnvelope = {
    data: QrScannerCreateManyOrganizationInput | QrScannerCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationProfileCreateWithoutOrganizationInput = {
    id?: string
    displayName?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfilesInput
  }

  export type OrganizationProfileUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    displayName?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationProfileCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationProfileWhereUniqueInput
    create: XOR<OrganizationProfileCreateWithoutOrganizationInput, OrganizationProfileUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationProfileCreateManyOrganizationInputEnvelope = {
    data: OrganizationProfileCreateManyOrganizationInput | OrganizationProfileCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationInvitationCreateWithoutOrganizationInput = {
    id?: string
    email: string
    role?: $Enums.OrganizationRole
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter: UserCreateNestedOneWithoutSentInvitationsInput
  }

  export type OrganizationInvitationUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    role?: $Enums.OrganizationRole
    expiresAt: Date | string
    invitedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationInvitationCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationInvitationWhereUniqueInput
    create: XOR<OrganizationInvitationCreateWithoutOrganizationInput, OrganizationInvitationUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationInvitationCreateManyOrganizationInputEnvelope = {
    data: OrganizationInvitationCreateManyOrganizationInput | OrganizationInvitationCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMembershipWhereUniqueInput
    update: XOR<OrganizationMembershipUpdateWithoutOrganizationInput, OrganizationMembershipUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMembershipWhereUniqueInput
    data: XOR<OrganizationMembershipUpdateWithoutOrganizationInput, OrganizationMembershipUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationMembershipScalarWhereInput
    data: XOR<OrganizationMembershipUpdateManyMutationInput, OrganizationMembershipUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type QrScannerUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: QrScannerWhereUniqueInput
    update: XOR<QrScannerUpdateWithoutOrganizationInput, QrScannerUncheckedUpdateWithoutOrganizationInput>
    create: XOR<QrScannerCreateWithoutOrganizationInput, QrScannerUncheckedCreateWithoutOrganizationInput>
  }

  export type QrScannerUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: QrScannerWhereUniqueInput
    data: XOR<QrScannerUpdateWithoutOrganizationInput, QrScannerUncheckedUpdateWithoutOrganizationInput>
  }

  export type QrScannerUpdateManyWithWhereWithoutOrganizationInput = {
    where: QrScannerScalarWhereInput
    data: XOR<QrScannerUpdateManyMutationInput, QrScannerUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type QrScannerScalarWhereInput = {
    AND?: QrScannerScalarWhereInput | QrScannerScalarWhereInput[]
    OR?: QrScannerScalarWhereInput[]
    NOT?: QrScannerScalarWhereInput | QrScannerScalarWhereInput[]
    id?: StringFilter<"QrScanner"> | string
    organizationId?: StringFilter<"QrScanner"> | string
    name?: StringFilter<"QrScanner"> | string
    location?: StringNullableFilter<"QrScanner"> | string | null
    scannerId?: StringFilter<"QrScanner"> | string
    password?: StringFilter<"QrScanner"> | string
    status?: StringFilter<"QrScanner"> | string
    lastActive?: DateTimeNullableFilter<"QrScanner"> | Date | string | null
    createdAt?: DateTimeFilter<"QrScanner"> | Date | string
    updatedAt?: DateTimeFilter<"QrScanner"> | Date | string
  }

  export type OrganizationProfileUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationProfileWhereUniqueInput
    update: XOR<OrganizationProfileUpdateWithoutOrganizationInput, OrganizationProfileUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationProfileCreateWithoutOrganizationInput, OrganizationProfileUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationProfileUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationProfileWhereUniqueInput
    data: XOR<OrganizationProfileUpdateWithoutOrganizationInput, OrganizationProfileUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationProfileUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationProfileScalarWhereInput
    data: XOR<OrganizationProfileUpdateManyMutationInput, OrganizationProfileUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationInvitationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationInvitationWhereUniqueInput
    update: XOR<OrganizationInvitationUpdateWithoutOrganizationInput, OrganizationInvitationUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationInvitationCreateWithoutOrganizationInput, OrganizationInvitationUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationInvitationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationInvitationWhereUniqueInput
    data: XOR<OrganizationInvitationUpdateWithoutOrganizationInput, OrganizationInvitationUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationInvitationUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationInvitationScalarWhereInput
    data: XOR<OrganizationInvitationUpdateManyMutationInput, OrganizationInvitationUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserCreateWithoutProfilesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    organizationId?: string | null
    roles?: UserCreaterolesInput | string[]
    systemRole?: $Enums.SystemRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipCreateNestedManyWithoutUserInput
    sentInvitations?: OrganizationInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutProfilesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    organizationId?: string | null
    roles?: UserCreaterolesInput | string[]
    systemRole?: $Enums.SystemRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipUncheckedCreateNestedManyWithoutUserInput
    sentInvitations?: OrganizationInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
  }

  export type OrganizationCreateWithoutProfilesInput = {
    id?: string
    name: string
    address?: string | null
    managerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipCreateNestedManyWithoutOrganizationInput
    qrScanners?: QrScannerCreateNestedManyWithoutOrganizationInput
    invitations?: OrganizationInvitationCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutProfilesInput = {
    id?: string
    name: string
    address?: string | null
    managerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput
    qrScanners?: QrScannerUncheckedCreateNestedManyWithoutOrganizationInput
    invitations?: OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutProfilesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutProfilesInput, OrganizationUncheckedCreateWithoutProfilesInput>
  }

  export type UserUpsertWithoutProfilesInput = {
    update: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type UserUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    systemRole?: NullableEnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUpdateManyWithoutUserNestedInput
    sentInvitations?: OrganizationInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    systemRole?: NullableEnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUncheckedUpdateManyWithoutUserNestedInput
    sentInvitations?: OrganizationInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type OrganizationUpsertWithoutProfilesInput = {
    update: XOR<OrganizationUpdateWithoutProfilesInput, OrganizationUncheckedUpdateWithoutProfilesInput>
    create: XOR<OrganizationCreateWithoutProfilesInput, OrganizationUncheckedCreateWithoutProfilesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutProfilesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutProfilesInput, OrganizationUncheckedUpdateWithoutProfilesInput>
  }

  export type OrganizationUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUpdateManyWithoutOrganizationNestedInput
    qrScanners?: QrScannerUpdateManyWithoutOrganizationNestedInput
    invitations?: OrganizationInvitationUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput
    qrScanners?: QrScannerUncheckedUpdateManyWithoutOrganizationNestedInput
    invitations?: OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutQrScannersInput = {
    id?: string
    name: string
    address?: string | null
    managerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipCreateNestedManyWithoutOrganizationInput
    profiles?: OrganizationProfileCreateNestedManyWithoutOrganizationInput
    invitations?: OrganizationInvitationCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutQrScannersInput = {
    id?: string
    name: string
    address?: string | null
    managerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput
    profiles?: OrganizationProfileUncheckedCreateNestedManyWithoutOrganizationInput
    invitations?: OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutQrScannersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutQrScannersInput, OrganizationUncheckedCreateWithoutQrScannersInput>
  }

  export type OrganizationUpsertWithoutQrScannersInput = {
    update: XOR<OrganizationUpdateWithoutQrScannersInput, OrganizationUncheckedUpdateWithoutQrScannersInput>
    create: XOR<OrganizationCreateWithoutQrScannersInput, OrganizationUncheckedCreateWithoutQrScannersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutQrScannersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutQrScannersInput, OrganizationUncheckedUpdateWithoutQrScannersInput>
  }

  export type OrganizationUpdateWithoutQrScannersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUpdateManyWithoutOrganizationNestedInput
    profiles?: OrganizationProfileUpdateManyWithoutOrganizationNestedInput
    invitations?: OrganizationInvitationUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutQrScannersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput
    profiles?: OrganizationProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    invitations?: OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutInvitationsInput = {
    id?: string
    name: string
    address?: string | null
    managerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipCreateNestedManyWithoutOrganizationInput
    qrScanners?: QrScannerCreateNestedManyWithoutOrganizationInput
    profiles?: OrganizationProfileCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    address?: string | null
    managerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput
    qrScanners?: QrScannerUncheckedCreateNestedManyWithoutOrganizationInput
    profiles?: OrganizationProfileUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutInvitationsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutInvitationsInput, OrganizationUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutSentInvitationsInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    organizationId?: string | null
    roles?: UserCreaterolesInput | string[]
    systemRole?: $Enums.SystemRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipCreateNestedManyWithoutUserInput
    profiles?: OrganizationProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentInvitationsInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    organizationId?: string | null
    roles?: UserCreaterolesInput | string[]
    systemRole?: $Enums.SystemRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMembershipUncheckedCreateNestedManyWithoutUserInput
    profiles?: OrganizationProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
  }

  export type OrganizationUpsertWithoutInvitationsInput = {
    update: XOR<OrganizationUpdateWithoutInvitationsInput, OrganizationUncheckedUpdateWithoutInvitationsInput>
    create: XOR<OrganizationCreateWithoutInvitationsInput, OrganizationUncheckedCreateWithoutInvitationsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutInvitationsInput, OrganizationUncheckedUpdateWithoutInvitationsInput>
  }

  export type OrganizationUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUpdateManyWithoutOrganizationNestedInput
    qrScanners?: QrScannerUpdateManyWithoutOrganizationNestedInput
    profiles?: OrganizationProfileUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    managerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput
    qrScanners?: QrScannerUncheckedUpdateManyWithoutOrganizationNestedInput
    profiles?: OrganizationProfileUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutSentInvitationsInput = {
    update: XOR<UserUpdateWithoutSentInvitationsInput, UserUncheckedUpdateWithoutSentInvitationsInput>
    create: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentInvitationsInput, UserUncheckedUpdateWithoutSentInvitationsInput>
  }

  export type UserUpdateWithoutSentInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    systemRole?: NullableEnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUpdateManyWithoutUserNestedInput
    profiles?: OrganizationProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: UserUpdaterolesInput | string[]
    systemRole?: NullableEnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMembershipUncheckedUpdateManyWithoutUserNestedInput
    profiles?: OrganizationProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationMembershipCreateManyUserInput = {
    id?: string
    organizationId: string
    role: $Enums.OrganizationRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationProfileCreateManyUserInput = {
    id?: string
    organizationId: string
    displayName?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationInvitationCreateManyInviterInput = {
    id?: string
    email: string
    organizationId: string
    role?: $Enums.OrganizationRole
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type OrganizationMembershipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type OrganizationProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationInvitationUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type OrganizationInvitationUncheckedUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationInvitationUncheckedUpdateManyWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipCreateManyOrganizationInput = {
    id?: string
    userId: string
    role: $Enums.OrganizationRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QrScannerCreateManyOrganizationInput = {
    id?: string
    name: string
    location?: string | null
    scannerId: string
    password: string
    status?: string
    lastActive?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationProfileCreateManyOrganizationInput = {
    id?: string
    userId: string
    displayName?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationInvitationCreateManyOrganizationInput = {
    id?: string
    email: string
    role?: $Enums.OrganizationRole
    expiresAt: Date | string
    invitedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type OrganizationMembershipUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrScannerUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    scannerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrScannerUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    scannerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrScannerUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    scannerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationProfileUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type OrganizationProfileUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationProfileUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationInvitationUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneRequiredWithoutSentInvitationsNestedInput
  }

  export type OrganizationInvitationUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationInvitationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}