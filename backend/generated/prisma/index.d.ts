
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
 * Model Social
 * 
 */
export type Social = $Result.DefaultSelection<Prisma.$SocialPayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectLink
 * 
 */
export type ProjectLink = $Result.DefaultSelection<Prisma.$ProjectLinkPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model HR
 * 
 */
export type HR = $Result.DefaultSelection<Prisma.$HRPayload>
/**
 * Model Matched
 * 
 */
export type Matched = $Result.DefaultSelection<Prisma.$MatchedPayload>
/**
 * Model KvPair
 * 
 */
export type KvPair = $Result.DefaultSelection<Prisma.$KvPairPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LinkType: {
  SOURCE_CODE: 'SOURCE_CODE',
  DEMO: 'DEMO',
  WEBSITE: 'WEBSITE',
  TESTIMONIAL: 'TESTIMONIAL'
};

export type LinkType = (typeof LinkType)[keyof typeof LinkType]


export const Degree: {
  BACHELORS: 'BACHELORS',
  MASTERS: 'MASTERS',
  BACHELORS_RUNNING: 'BACHELORS_RUNNING',
  MASTERS_RUNNING: 'MASTERS_RUNNING'
};

export type Degree = (typeof Degree)[keyof typeof Degree]

}

export type LinkType = $Enums.LinkType

export const LinkType: typeof $Enums.LinkType

export type Degree = $Enums.Degree

export const Degree: typeof $Enums.Degree

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.social`: Exposes CRUD operations for the **Social** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socials
    * const socials = await prisma.social.findMany()
    * ```
    */
  get social(): Prisma.SocialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectLink`: Exposes CRUD operations for the **ProjectLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectLinks
    * const projectLinks = await prisma.projectLink.findMany()
    * ```
    */
  get projectLink(): Prisma.ProjectLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hR`: Exposes CRUD operations for the **HR** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HRS
    * const hRS = await prisma.hR.findMany()
    * ```
    */
  get hR(): Prisma.HRDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matched`: Exposes CRUD operations for the **Matched** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matcheds
    * const matcheds = await prisma.matched.findMany()
    * ```
    */
  get matched(): Prisma.MatchedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kvPair`: Exposes CRUD operations for the **KvPair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KvPairs
    * const kvPairs = await prisma.kvPair.findMany()
    * ```
    */
  get kvPair(): Prisma.KvPairDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Social: 'Social',
    Education: 'Education',
    Skill: 'Skill',
    Experience: 'Experience',
    Project: 'Project',
    ProjectLink: 'ProjectLink',
    Resume: 'Resume',
    Job: 'Job',
    HR: 'HR',
    Matched: 'Matched',
    KvPair: 'KvPair'
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
      modelProps: "user" | "social" | "education" | "skill" | "experience" | "project" | "projectLink" | "resume" | "job" | "hR" | "matched" | "kvPair"
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
      Social: {
        payload: Prisma.$SocialPayload<ExtArgs>
        fields: Prisma.SocialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          findFirst: {
            args: Prisma.SocialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          findMany: {
            args: Prisma.SocialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          create: {
            args: Prisma.SocialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          createMany: {
            args: Prisma.SocialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          delete: {
            args: Prisma.SocialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          update: {
            args: Prisma.SocialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          deleteMany: {
            args: Prisma.SocialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          upsert: {
            args: Prisma.SocialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          aggregate: {
            args: Prisma.SocialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocial>
          }
          groupBy: {
            args: Prisma.SocialGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialCountArgs<ExtArgs>
            result: $Utils.Optional<SocialCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectLink: {
        payload: Prisma.$ProjectLinkPayload<ExtArgs>
        fields: Prisma.ProjectLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          findFirst: {
            args: Prisma.ProjectLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          findMany: {
            args: Prisma.ProjectLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>[]
          }
          create: {
            args: Prisma.ProjectLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          createMany: {
            args: Prisma.ProjectLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>[]
          }
          delete: {
            args: Prisma.ProjectLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          update: {
            args: Prisma.ProjectLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          deleteMany: {
            args: Prisma.ProjectLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>[]
          }
          upsert: {
            args: Prisma.ProjectLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          aggregate: {
            args: Prisma.ProjectLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectLink>
          }
          groupBy: {
            args: Prisma.ProjectLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectLinkCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      HR: {
        payload: Prisma.$HRPayload<ExtArgs>
        fields: Prisma.HRFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HRFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HRFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRPayload>
          }
          findFirst: {
            args: Prisma.HRFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HRFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRPayload>
          }
          findMany: {
            args: Prisma.HRFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRPayload>[]
          }
          create: {
            args: Prisma.HRCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRPayload>
          }
          createMany: {
            args: Prisma.HRCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HRCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRPayload>[]
          }
          delete: {
            args: Prisma.HRDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRPayload>
          }
          update: {
            args: Prisma.HRUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRPayload>
          }
          deleteMany: {
            args: Prisma.HRDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HRUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HRUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRPayload>[]
          }
          upsert: {
            args: Prisma.HRUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRPayload>
          }
          aggregate: {
            args: Prisma.HRAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHR>
          }
          groupBy: {
            args: Prisma.HRGroupByArgs<ExtArgs>
            result: $Utils.Optional<HRGroupByOutputType>[]
          }
          count: {
            args: Prisma.HRCountArgs<ExtArgs>
            result: $Utils.Optional<HRCountAggregateOutputType> | number
          }
        }
      }
      Matched: {
        payload: Prisma.$MatchedPayload<ExtArgs>
        fields: Prisma.MatchedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchedPayload>
          }
          findFirst: {
            args: Prisma.MatchedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchedPayload>
          }
          findMany: {
            args: Prisma.MatchedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchedPayload>[]
          }
          create: {
            args: Prisma.MatchedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchedPayload>
          }
          createMany: {
            args: Prisma.MatchedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchedPayload>[]
          }
          delete: {
            args: Prisma.MatchedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchedPayload>
          }
          update: {
            args: Prisma.MatchedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchedPayload>
          }
          deleteMany: {
            args: Prisma.MatchedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchedPayload>[]
          }
          upsert: {
            args: Prisma.MatchedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchedPayload>
          }
          aggregate: {
            args: Prisma.MatchedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatched>
          }
          groupBy: {
            args: Prisma.MatchedGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchedGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchedCountArgs<ExtArgs>
            result: $Utils.Optional<MatchedCountAggregateOutputType> | number
          }
        }
      }
      KvPair: {
        payload: Prisma.$KvPairPayload<ExtArgs>
        fields: Prisma.KvPairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KvPairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KvPairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPairPayload>
          }
          findFirst: {
            args: Prisma.KvPairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KvPairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPairPayload>
          }
          findMany: {
            args: Prisma.KvPairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPairPayload>[]
          }
          create: {
            args: Prisma.KvPairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPairPayload>
          }
          createMany: {
            args: Prisma.KvPairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KvPairCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPairPayload>[]
          }
          delete: {
            args: Prisma.KvPairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPairPayload>
          }
          update: {
            args: Prisma.KvPairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPairPayload>
          }
          deleteMany: {
            args: Prisma.KvPairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KvPairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KvPairUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPairPayload>[]
          }
          upsert: {
            args: Prisma.KvPairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KvPairPayload>
          }
          aggregate: {
            args: Prisma.KvPairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKvPair>
          }
          groupBy: {
            args: Prisma.KvPairGroupByArgs<ExtArgs>
            result: $Utils.Optional<KvPairGroupByOutputType>[]
          }
          count: {
            args: Prisma.KvPairCountArgs<ExtArgs>
            result: $Utils.Optional<KvPairCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    social?: SocialOmit
    education?: EducationOmit
    skill?: SkillOmit
    experience?: ExperienceOmit
    project?: ProjectOmit
    projectLink?: ProjectLinkOmit
    resume?: ResumeOmit
    job?: JobOmit
    hR?: HROmit
    matched?: MatchedOmit
    kvPair?: KvPairOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    socials: number
    education: number
    skills: number
    experiences: number
    projects: number
    resume: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socials?: boolean | UserCountOutputTypeCountSocialsArgs
    education?: boolean | UserCountOutputTypeCountEducationArgs
    skills?: boolean | UserCountOutputTypeCountSkillsArgs
    experiences?: boolean | UserCountOutputTypeCountExperiencesArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    resume?: boolean | UserCountOutputTypeCountResumeArgs
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
  export type UserCountOutputTypeCountSocialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    links: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | ProjectCountOutputTypeCountLinksArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectLinkWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    matched: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matched?: boolean | JobCountOutputTypeCountMatchedArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountMatchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchedWhereInput
  }


  /**
   * Count Type HRCountOutputType
   */

  export type HRCountOutputType = {
    jobs: number
  }

  export type HRCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | HRCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * HRCountOutputType without action
   */
  export type HRCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRCountOutputType
     */
    select?: HRCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HRCountOutputType without action
   */
  export type HRCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * Count Type MatchedCountOutputType
   */

  export type MatchedCountOutputType = {
    userIds: number
  }

  export type MatchedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userIds?: boolean | MatchedCountOutputTypeCountUserIdsArgs
  }

  // Custom InputTypes
  /**
   * MatchedCountOutputType without action
   */
  export type MatchedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchedCountOutputType
     */
    select?: MatchedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchedCountOutputType without action
   */
  export type MatchedCountOutputTypeCountUserIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KvPairWhereInput
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
    userId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    contact: string | null
    location: string | null
    personalWebsite: string | null
    githubProfile: string | null
    githubId: string | null
    githubAccessToken: string | null
    latestRepo: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    contact: string | null
    location: string | null
    personalWebsite: string | null
    githubProfile: string | null
    githubId: string | null
    githubAccessToken: string | null
    latestRepo: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    firstName: number
    lastName: number
    email: number
    contact: number
    location: number
    personalWebsite: number
    githubProfile: number
    githubId: number
    githubAccessToken: number
    latestRepo: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    contact?: true
    location?: true
    personalWebsite?: true
    githubProfile?: true
    githubId?: true
    githubAccessToken?: true
    latestRepo?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    contact?: true
    location?: true
    personalWebsite?: true
    githubProfile?: true
    githubId?: true
    githubAccessToken?: true
    latestRepo?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    contact?: true
    location?: true
    personalWebsite?: true
    githubProfile?: true
    githubId?: true
    githubAccessToken?: true
    latestRepo?: true
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
    userId: string
    firstName: string | null
    lastName: string | null
    email: string | null
    contact: string | null
    location: string | null
    personalWebsite: string | null
    githubProfile: string
    githubId: string | null
    githubAccessToken: string | null
    latestRepo: string | null
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
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contact?: boolean
    location?: boolean
    personalWebsite?: boolean
    githubProfile?: boolean
    githubId?: boolean
    githubAccessToken?: boolean
    latestRepo?: boolean
    socials?: boolean | User$socialsArgs<ExtArgs>
    education?: boolean | User$educationArgs<ExtArgs>
    skills?: boolean | User$skillsArgs<ExtArgs>
    experiences?: boolean | User$experiencesArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    resume?: boolean | User$resumeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contact?: boolean
    location?: boolean
    personalWebsite?: boolean
    githubProfile?: boolean
    githubId?: boolean
    githubAccessToken?: boolean
    latestRepo?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contact?: boolean
    location?: boolean
    personalWebsite?: boolean
    githubProfile?: boolean
    githubId?: boolean
    githubAccessToken?: boolean
    latestRepo?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contact?: boolean
    location?: boolean
    personalWebsite?: boolean
    githubProfile?: boolean
    githubId?: boolean
    githubAccessToken?: boolean
    latestRepo?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "firstName" | "lastName" | "email" | "contact" | "location" | "personalWebsite" | "githubProfile" | "githubId" | "githubAccessToken" | "latestRepo", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socials?: boolean | User$socialsArgs<ExtArgs>
    education?: boolean | User$educationArgs<ExtArgs>
    skills?: boolean | User$skillsArgs<ExtArgs>
    experiences?: boolean | User$experiencesArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    resume?: boolean | User$resumeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      socials: Prisma.$SocialPayload<ExtArgs>[]
      education: Prisma.$EducationPayload<ExtArgs>[]
      skills: Prisma.$SkillPayload<ExtArgs>[]
      experiences: Prisma.$ExperiencePayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      resume: Prisma.$ResumePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      firstName: string | null
      lastName: string | null
      email: string | null
      contact: string | null
      location: string | null
      personalWebsite: string | null
      githubProfile: string
      githubId: string | null
      githubAccessToken: string | null
      latestRepo: string | null
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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
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
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
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
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
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
    socials<T extends User$socialsArgs<ExtArgs> = {}>(args?: Subset<T, User$socialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    education<T extends User$educationArgs<ExtArgs> = {}>(args?: Subset<T, User$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends User$skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experiences<T extends User$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, User$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resume<T extends User$resumeArgs<ExtArgs> = {}>(args?: Subset<T, User$resumeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly contact: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly personalWebsite: FieldRef<"User", 'String'>
    readonly githubProfile: FieldRef<"User", 'String'>
    readonly githubId: FieldRef<"User", 'String'>
    readonly githubAccessToken: FieldRef<"User", 'String'>
    readonly latestRepo: FieldRef<"User", 'String'>
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
   * User.socials
   */
  export type User$socialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    where?: SocialWhereInput
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    cursor?: SocialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * User.education
   */
  export type User$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * User.skills
   */
  export type User$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * User.experiences
   */
  export type User$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.resume
   */
  export type User$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
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
   * Model Social
   */

  export type AggregateSocial = {
    _count: SocialCountAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
  }

  export type SocialMinAggregateOutputType = {
    id: string | null
    userId: string | null
    websiteName: string | null
    url: string | null
  }

  export type SocialMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    websiteName: string | null
    url: string | null
  }

  export type SocialCountAggregateOutputType = {
    id: number
    userId: number
    websiteName: number
    url: number
    _all: number
  }


  export type SocialMinAggregateInputType = {
    id?: true
    userId?: true
    websiteName?: true
    url?: true
  }

  export type SocialMaxAggregateInputType = {
    id?: true
    userId?: true
    websiteName?: true
    url?: true
  }

  export type SocialCountAggregateInputType = {
    id?: true
    userId?: true
    websiteName?: true
    url?: true
    _all?: true
  }

  export type SocialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Social to aggregate.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Socials
    **/
    _count?: true | SocialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialMaxAggregateInputType
  }

  export type GetSocialAggregateType<T extends SocialAggregateArgs> = {
        [P in keyof T & keyof AggregateSocial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocial[P]>
      : GetScalarType<T[P], AggregateSocial[P]>
  }




  export type SocialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialWhereInput
    orderBy?: SocialOrderByWithAggregationInput | SocialOrderByWithAggregationInput[]
    by: SocialScalarFieldEnum[] | SocialScalarFieldEnum
    having?: SocialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialCountAggregateInputType | true
    _min?: SocialMinAggregateInputType
    _max?: SocialMaxAggregateInputType
  }

  export type SocialGroupByOutputType = {
    id: string
    userId: string
    websiteName: string
    url: string
    _count: SocialCountAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
  }

  type GetSocialGroupByPayload<T extends SocialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialGroupByOutputType[P]>
            : GetScalarType<T[P], SocialGroupByOutputType[P]>
        }
      >
    >


  export type SocialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    websiteName?: boolean
    url?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social"]>

  export type SocialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    websiteName?: boolean
    url?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social"]>

  export type SocialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    websiteName?: boolean
    url?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social"]>

  export type SocialSelectScalar = {
    id?: boolean
    userId?: boolean
    websiteName?: boolean
    url?: boolean
  }

  export type SocialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "websiteName" | "url", ExtArgs["result"]["social"]>
  export type SocialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SocialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SocialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SocialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Social"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      websiteName: string
      url: string
    }, ExtArgs["result"]["social"]>
    composites: {}
  }

  type SocialGetPayload<S extends boolean | null | undefined | SocialDefaultArgs> = $Result.GetResult<Prisma.$SocialPayload, S>

  type SocialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialCountAggregateInputType | true
    }

  export interface SocialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Social'], meta: { name: 'Social' } }
    /**
     * Find zero or one Social that matches the filter.
     * @param {SocialFindUniqueArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialFindUniqueArgs>(args: SelectSubset<T, SocialFindUniqueArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Social that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialFindUniqueOrThrowArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindFirstArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialFindFirstArgs>(args?: SelectSubset<T, SocialFindFirstArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindFirstOrThrowArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socials
     * const socials = await prisma.social.findMany()
     * 
     * // Get first 10 Socials
     * const socials = await prisma.social.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialWithIdOnly = await prisma.social.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialFindManyArgs>(args?: SelectSubset<T, SocialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Social.
     * @param {SocialCreateArgs} args - Arguments to create a Social.
     * @example
     * // Create one Social
     * const Social = await prisma.social.create({
     *   data: {
     *     // ... data to create a Social
     *   }
     * })
     * 
     */
    create<T extends SocialCreateArgs>(args: SelectSubset<T, SocialCreateArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Socials.
     * @param {SocialCreateManyArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const social = await prisma.social.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialCreateManyArgs>(args?: SelectSubset<T, SocialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Socials and returns the data saved in the database.
     * @param {SocialCreateManyAndReturnArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const social = await prisma.social.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Socials and only return the `id`
     * const socialWithIdOnly = await prisma.social.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Social.
     * @param {SocialDeleteArgs} args - Arguments to delete one Social.
     * @example
     * // Delete one Social
     * const Social = await prisma.social.delete({
     *   where: {
     *     // ... filter to delete one Social
     *   }
     * })
     * 
     */
    delete<T extends SocialDeleteArgs>(args: SelectSubset<T, SocialDeleteArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Social.
     * @param {SocialUpdateArgs} args - Arguments to update one Social.
     * @example
     * // Update one Social
     * const social = await prisma.social.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialUpdateArgs>(args: SelectSubset<T, SocialUpdateArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Socials.
     * @param {SocialDeleteManyArgs} args - Arguments to filter Socials to delete.
     * @example
     * // Delete a few Socials
     * const { count } = await prisma.social.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialDeleteManyArgs>(args?: SelectSubset<T, SocialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socials
     * const social = await prisma.social.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialUpdateManyArgs>(args: SelectSubset<T, SocialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials and returns the data updated in the database.
     * @param {SocialUpdateManyAndReturnArgs} args - Arguments to update many Socials.
     * @example
     * // Update many Socials
     * const social = await prisma.social.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Socials and only return the `id`
     * const socialWithIdOnly = await prisma.social.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Social.
     * @param {SocialUpsertArgs} args - Arguments to update or create a Social.
     * @example
     * // Update or create a Social
     * const social = await prisma.social.upsert({
     *   create: {
     *     // ... data to create a Social
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Social we want to update
     *   }
     * })
     */
    upsert<T extends SocialUpsertArgs>(args: SelectSubset<T, SocialUpsertArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCountArgs} args - Arguments to filter Socials to count.
     * @example
     * // Count the number of Socials
     * const count = await prisma.social.count({
     *   where: {
     *     // ... the filter for the Socials we want to count
     *   }
     * })
    **/
    count<T extends SocialCountArgs>(
      args?: Subset<T, SocialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialAggregateArgs>(args: Subset<T, SocialAggregateArgs>): Prisma.PrismaPromise<GetSocialAggregateType<T>>

    /**
     * Group by Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialGroupByArgs} args - Group by arguments.
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
      T extends SocialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialGroupByArgs['orderBy'] }
        : { orderBy?: SocialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Social model
   */
  readonly fields: SocialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Social.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Social model
   */
  interface SocialFieldRefs {
    readonly id: FieldRef<"Social", 'String'>
    readonly userId: FieldRef<"Social", 'String'>
    readonly websiteName: FieldRef<"Social", 'String'>
    readonly url: FieldRef<"Social", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Social findUnique
   */
  export type SocialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social findUniqueOrThrow
   */
  export type SocialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social findFirst
   */
  export type SocialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social findFirstOrThrow
   */
  export type SocialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social findMany
   */
  export type SocialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social create
   */
  export type SocialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * The data needed to create a Social.
     */
    data: XOR<SocialCreateInput, SocialUncheckedCreateInput>
  }

  /**
   * Social createMany
   */
  export type SocialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Socials.
     */
    data: SocialCreateManyInput | SocialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Social createManyAndReturn
   */
  export type SocialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * The data used to create many Socials.
     */
    data: SocialCreateManyInput | SocialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Social update
   */
  export type SocialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * The data needed to update a Social.
     */
    data: XOR<SocialUpdateInput, SocialUncheckedUpdateInput>
    /**
     * Choose, which Social to update.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social updateMany
   */
  export type SocialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to update.
     */
    limit?: number
  }

  /**
   * Social updateManyAndReturn
   */
  export type SocialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Social upsert
   */
  export type SocialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * The filter to search for the Social to update in case it exists.
     */
    where: SocialWhereUniqueInput
    /**
     * In case the Social found by the `where` argument doesn't exist, create a new Social with this data.
     */
    create: XOR<SocialCreateInput, SocialUncheckedCreateInput>
    /**
     * In case the Social was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialUpdateInput, SocialUncheckedUpdateInput>
  }

  /**
   * Social delete
   */
  export type SocialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter which Social to delete.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social deleteMany
   */
  export type SocialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socials to delete
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to delete.
     */
    limit?: number
  }

  /**
   * Social without action
   */
  export type SocialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    college: string | null
    field: string | null
    startDate: Date | null
    endDate: Date | null
    completed: boolean | null
    expectedEndDate: Date | null
    GPA: string | null
    CGPA: string | null
    description: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    college: string | null
    field: string | null
    startDate: Date | null
    endDate: Date | null
    completed: boolean | null
    expectedEndDate: Date | null
    GPA: string | null
    CGPA: string | null
    description: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    userId: number
    college: number
    field: number
    startDate: number
    endDate: number
    completed: number
    expectedEndDate: number
    GPA: number
    CGPA: number
    description: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    userId?: true
    college?: true
    field?: true
    startDate?: true
    endDate?: true
    completed?: true
    expectedEndDate?: true
    GPA?: true
    CGPA?: true
    description?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    userId?: true
    college?: true
    field?: true
    startDate?: true
    endDate?: true
    completed?: true
    expectedEndDate?: true
    GPA?: true
    CGPA?: true
    description?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    userId?: true
    college?: true
    field?: true
    startDate?: true
    endDate?: true
    completed?: true
    expectedEndDate?: true
    GPA?: true
    CGPA?: true
    description?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    userId: string
    college: string
    field: string
    startDate: Date
    endDate: Date | null
    completed: boolean | null
    expectedEndDate: Date | null
    GPA: string | null
    CGPA: string | null
    description: string | null
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    college?: boolean
    field?: boolean
    startDate?: boolean
    endDate?: boolean
    completed?: boolean
    expectedEndDate?: boolean
    GPA?: boolean
    CGPA?: boolean
    description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    college?: boolean
    field?: boolean
    startDate?: boolean
    endDate?: boolean
    completed?: boolean
    expectedEndDate?: boolean
    GPA?: boolean
    CGPA?: boolean
    description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    college?: boolean
    field?: boolean
    startDate?: boolean
    endDate?: boolean
    completed?: boolean
    expectedEndDate?: boolean
    GPA?: boolean
    CGPA?: boolean
    description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    userId?: boolean
    college?: boolean
    field?: boolean
    startDate?: boolean
    endDate?: boolean
    completed?: boolean
    expectedEndDate?: boolean
    GPA?: boolean
    CGPA?: boolean
    description?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "college" | "field" | "startDate" | "endDate" | "completed" | "expectedEndDate" | "GPA" | "CGPA" | "description", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      college: string
      field: string
      startDate: Date
      endDate: Date | null
      completed: boolean | null
      expectedEndDate: Date | null
      GPA: string | null
      CGPA: string | null
      description: string | null
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
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
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
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
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly userId: FieldRef<"Education", 'String'>
    readonly college: FieldRef<"Education", 'String'>
    readonly field: FieldRef<"Education", 'String'>
    readonly startDate: FieldRef<"Education", 'DateTime'>
    readonly endDate: FieldRef<"Education", 'DateTime'>
    readonly completed: FieldRef<"Education", 'Boolean'>
    readonly expectedEndDate: FieldRef<"Education", 'DateTime'>
    readonly GPA: FieldRef<"Education", 'String'>
    readonly CGPA: FieldRef<"Education", 'String'>
    readonly description: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    skills: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    skills?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    userId: string
    title: string
    skills: string[]
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    skills?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    skills?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    skills?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    skills?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "skills", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      skills: string[]
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly userId: FieldRef<"Skill", 'String'>
    readonly title: FieldRef<"Skill", 'String'>
    readonly skills: FieldRef<"Skill", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    company: string | null
    role: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    company: string | null
    role: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    userId: number
    company: number
    role: number
    startDate: number
    endDate: number
    description: number
    _all: number
  }


  export type ExperienceMinAggregateInputType = {
    id?: true
    userId?: true
    company?: true
    role?: true
    startDate?: true
    endDate?: true
    description?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    userId?: true
    company?: true
    role?: true
    startDate?: true
    endDate?: true
    description?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    userId?: true
    company?: true
    role?: true
    startDate?: true
    endDate?: true
    description?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    userId: string
    company: string
    role: string
    startDate: Date
    endDate: Date | null
    description: string | null
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    company?: boolean
    role?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    company?: boolean
    role?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    company?: boolean
    role?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    userId?: boolean
    company?: boolean
    role?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "company" | "role" | "startDate" | "endDate" | "description", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      company: string
      role: string
      startDate: Date
      endDate: Date | null
      description: string | null
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
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
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'String'>
    readonly userId: FieldRef<"Experience", 'String'>
    readonly company: FieldRef<"Experience", 'String'>
    readonly role: FieldRef<"Experience", 'String'>
    readonly startDate: FieldRef<"Experience", 'DateTime'>
    readonly endDate: FieldRef<"Experience", 'DateTime'>
    readonly description: FieldRef<"Experience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    startDate: number
    endDate: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string
    startDate: Date
    endDate: Date | null
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    links?: boolean | Project$linksArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "startDate" | "endDate", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | Project$linksArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      links: Prisma.$ProjectLinkPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string
      startDate: Date
      endDate: Date | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    links<T extends Project$linksArgs<ExtArgs> = {}>(args?: Subset<T, Project$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.links
   */
  export type Project$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    where?: ProjectLinkWhereInput
    orderBy?: ProjectLinkOrderByWithRelationInput | ProjectLinkOrderByWithRelationInput[]
    cursor?: ProjectLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectLinkScalarFieldEnum | ProjectLinkScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectLink
   */

  export type AggregateProjectLink = {
    _count: ProjectLinkCountAggregateOutputType | null
    _min: ProjectLinkMinAggregateOutputType | null
    _max: ProjectLinkMaxAggregateOutputType | null
  }

  export type ProjectLinkMinAggregateOutputType = {
    id: string | null
    type: $Enums.LinkType | null
    projectId: string | null
  }

  export type ProjectLinkMaxAggregateOutputType = {
    id: string | null
    type: $Enums.LinkType | null
    projectId: string | null
  }

  export type ProjectLinkCountAggregateOutputType = {
    id: number
    type: number
    projectId: number
    _all: number
  }


  export type ProjectLinkMinAggregateInputType = {
    id?: true
    type?: true
    projectId?: true
  }

  export type ProjectLinkMaxAggregateInputType = {
    id?: true
    type?: true
    projectId?: true
  }

  export type ProjectLinkCountAggregateInputType = {
    id?: true
    type?: true
    projectId?: true
    _all?: true
  }

  export type ProjectLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectLink to aggregate.
     */
    where?: ProjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLinks to fetch.
     */
    orderBy?: ProjectLinkOrderByWithRelationInput | ProjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectLinks
    **/
    _count?: true | ProjectLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectLinkMaxAggregateInputType
  }

  export type GetProjectLinkAggregateType<T extends ProjectLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectLink[P]>
      : GetScalarType<T[P], AggregateProjectLink[P]>
  }




  export type ProjectLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectLinkWhereInput
    orderBy?: ProjectLinkOrderByWithAggregationInput | ProjectLinkOrderByWithAggregationInput[]
    by: ProjectLinkScalarFieldEnum[] | ProjectLinkScalarFieldEnum
    having?: ProjectLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectLinkCountAggregateInputType | true
    _min?: ProjectLinkMinAggregateInputType
    _max?: ProjectLinkMaxAggregateInputType
  }

  export type ProjectLinkGroupByOutputType = {
    id: string
    type: $Enums.LinkType
    projectId: string
    _count: ProjectLinkCountAggregateOutputType | null
    _min: ProjectLinkMinAggregateOutputType | null
    _max: ProjectLinkMaxAggregateOutputType | null
  }

  type GetProjectLinkGroupByPayload<T extends ProjectLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectLinkGroupByOutputType[P]>
        }
      >
    >


  export type ProjectLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    projectId?: boolean
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLink"]>

  export type ProjectLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    projectId?: boolean
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLink"]>

  export type ProjectLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    projectId?: boolean
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLink"]>

  export type ProjectLinkSelectScalar = {
    id?: boolean
    type?: boolean
    projectId?: boolean
  }

  export type ProjectLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "projectId", ExtArgs["result"]["projectLink"]>
  export type ProjectLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectLink"
    objects: {
      Project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.LinkType
      projectId: string
    }, ExtArgs["result"]["projectLink"]>
    composites: {}
  }

  type ProjectLinkGetPayload<S extends boolean | null | undefined | ProjectLinkDefaultArgs> = $Result.GetResult<Prisma.$ProjectLinkPayload, S>

  type ProjectLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectLinkCountAggregateInputType | true
    }

  export interface ProjectLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectLink'], meta: { name: 'ProjectLink' } }
    /**
     * Find zero or one ProjectLink that matches the filter.
     * @param {ProjectLinkFindUniqueArgs} args - Arguments to find a ProjectLink
     * @example
     * // Get one ProjectLink
     * const projectLink = await prisma.projectLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectLinkFindUniqueArgs>(args: SelectSubset<T, ProjectLinkFindUniqueArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectLinkFindUniqueOrThrowArgs} args - Arguments to find a ProjectLink
     * @example
     * // Get one ProjectLink
     * const projectLink = await prisma.projectLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkFindFirstArgs} args - Arguments to find a ProjectLink
     * @example
     * // Get one ProjectLink
     * const projectLink = await prisma.projectLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectLinkFindFirstArgs>(args?: SelectSubset<T, ProjectLinkFindFirstArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkFindFirstOrThrowArgs} args - Arguments to find a ProjectLink
     * @example
     * // Get one ProjectLink
     * const projectLink = await prisma.projectLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectLinks
     * const projectLinks = await prisma.projectLink.findMany()
     * 
     * // Get first 10 ProjectLinks
     * const projectLinks = await prisma.projectLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectLinkWithIdOnly = await prisma.projectLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectLinkFindManyArgs>(args?: SelectSubset<T, ProjectLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectLink.
     * @param {ProjectLinkCreateArgs} args - Arguments to create a ProjectLink.
     * @example
     * // Create one ProjectLink
     * const ProjectLink = await prisma.projectLink.create({
     *   data: {
     *     // ... data to create a ProjectLink
     *   }
     * })
     * 
     */
    create<T extends ProjectLinkCreateArgs>(args: SelectSubset<T, ProjectLinkCreateArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectLinks.
     * @param {ProjectLinkCreateManyArgs} args - Arguments to create many ProjectLinks.
     * @example
     * // Create many ProjectLinks
     * const projectLink = await prisma.projectLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectLinkCreateManyArgs>(args?: SelectSubset<T, ProjectLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectLinks and returns the data saved in the database.
     * @param {ProjectLinkCreateManyAndReturnArgs} args - Arguments to create many ProjectLinks.
     * @example
     * // Create many ProjectLinks
     * const projectLink = await prisma.projectLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectLinks and only return the `id`
     * const projectLinkWithIdOnly = await prisma.projectLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectLink.
     * @param {ProjectLinkDeleteArgs} args - Arguments to delete one ProjectLink.
     * @example
     * // Delete one ProjectLink
     * const ProjectLink = await prisma.projectLink.delete({
     *   where: {
     *     // ... filter to delete one ProjectLink
     *   }
     * })
     * 
     */
    delete<T extends ProjectLinkDeleteArgs>(args: SelectSubset<T, ProjectLinkDeleteArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectLink.
     * @param {ProjectLinkUpdateArgs} args - Arguments to update one ProjectLink.
     * @example
     * // Update one ProjectLink
     * const projectLink = await prisma.projectLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectLinkUpdateArgs>(args: SelectSubset<T, ProjectLinkUpdateArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectLinks.
     * @param {ProjectLinkDeleteManyArgs} args - Arguments to filter ProjectLinks to delete.
     * @example
     * // Delete a few ProjectLinks
     * const { count } = await prisma.projectLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectLinkDeleteManyArgs>(args?: SelectSubset<T, ProjectLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectLinks
     * const projectLink = await prisma.projectLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectLinkUpdateManyArgs>(args: SelectSubset<T, ProjectLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLinks and returns the data updated in the database.
     * @param {ProjectLinkUpdateManyAndReturnArgs} args - Arguments to update many ProjectLinks.
     * @example
     * // Update many ProjectLinks
     * const projectLink = await prisma.projectLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectLinks and only return the `id`
     * const projectLinkWithIdOnly = await prisma.projectLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectLink.
     * @param {ProjectLinkUpsertArgs} args - Arguments to update or create a ProjectLink.
     * @example
     * // Update or create a ProjectLink
     * const projectLink = await prisma.projectLink.upsert({
     *   create: {
     *     // ... data to create a ProjectLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectLink we want to update
     *   }
     * })
     */
    upsert<T extends ProjectLinkUpsertArgs>(args: SelectSubset<T, ProjectLinkUpsertArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkCountArgs} args - Arguments to filter ProjectLinks to count.
     * @example
     * // Count the number of ProjectLinks
     * const count = await prisma.projectLink.count({
     *   where: {
     *     // ... the filter for the ProjectLinks we want to count
     *   }
     * })
    **/
    count<T extends ProjectLinkCountArgs>(
      args?: Subset<T, ProjectLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectLinkAggregateArgs>(args: Subset<T, ProjectLinkAggregateArgs>): Prisma.PrismaPromise<GetProjectLinkAggregateType<T>>

    /**
     * Group by ProjectLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkGroupByArgs} args - Group by arguments.
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
      T extends ProjectLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectLinkGroupByArgs['orderBy'] }
        : { orderBy?: ProjectLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectLink model
   */
  readonly fields: ProjectLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectLink model
   */
  interface ProjectLinkFieldRefs {
    readonly id: FieldRef<"ProjectLink", 'String'>
    readonly type: FieldRef<"ProjectLink", 'LinkType'>
    readonly projectId: FieldRef<"ProjectLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectLink findUnique
   */
  export type ProjectLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLink to fetch.
     */
    where: ProjectLinkWhereUniqueInput
  }

  /**
   * ProjectLink findUniqueOrThrow
   */
  export type ProjectLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLink to fetch.
     */
    where: ProjectLinkWhereUniqueInput
  }

  /**
   * ProjectLink findFirst
   */
  export type ProjectLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLink to fetch.
     */
    where?: ProjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLinks to fetch.
     */
    orderBy?: ProjectLinkOrderByWithRelationInput | ProjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectLinks.
     */
    cursor?: ProjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectLinks.
     */
    distinct?: ProjectLinkScalarFieldEnum | ProjectLinkScalarFieldEnum[]
  }

  /**
   * ProjectLink findFirstOrThrow
   */
  export type ProjectLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLink to fetch.
     */
    where?: ProjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLinks to fetch.
     */
    orderBy?: ProjectLinkOrderByWithRelationInput | ProjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectLinks.
     */
    cursor?: ProjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectLinks.
     */
    distinct?: ProjectLinkScalarFieldEnum | ProjectLinkScalarFieldEnum[]
  }

  /**
   * ProjectLink findMany
   */
  export type ProjectLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLinks to fetch.
     */
    where?: ProjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLinks to fetch.
     */
    orderBy?: ProjectLinkOrderByWithRelationInput | ProjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectLinks.
     */
    cursor?: ProjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLinks.
     */
    skip?: number
    distinct?: ProjectLinkScalarFieldEnum | ProjectLinkScalarFieldEnum[]
  }

  /**
   * ProjectLink create
   */
  export type ProjectLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectLink.
     */
    data: XOR<ProjectLinkCreateInput, ProjectLinkUncheckedCreateInput>
  }

  /**
   * ProjectLink createMany
   */
  export type ProjectLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectLinks.
     */
    data: ProjectLinkCreateManyInput | ProjectLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectLink createManyAndReturn
   */
  export type ProjectLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectLinks.
     */
    data: ProjectLinkCreateManyInput | ProjectLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectLink update
   */
  export type ProjectLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectLink.
     */
    data: XOR<ProjectLinkUpdateInput, ProjectLinkUncheckedUpdateInput>
    /**
     * Choose, which ProjectLink to update.
     */
    where: ProjectLinkWhereUniqueInput
  }

  /**
   * ProjectLink updateMany
   */
  export type ProjectLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectLinks.
     */
    data: XOR<ProjectLinkUpdateManyMutationInput, ProjectLinkUncheckedUpdateManyInput>
    /**
     * Filter which ProjectLinks to update
     */
    where?: ProjectLinkWhereInput
    /**
     * Limit how many ProjectLinks to update.
     */
    limit?: number
  }

  /**
   * ProjectLink updateManyAndReturn
   */
  export type ProjectLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * The data used to update ProjectLinks.
     */
    data: XOR<ProjectLinkUpdateManyMutationInput, ProjectLinkUncheckedUpdateManyInput>
    /**
     * Filter which ProjectLinks to update
     */
    where?: ProjectLinkWhereInput
    /**
     * Limit how many ProjectLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectLink upsert
   */
  export type ProjectLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectLink to update in case it exists.
     */
    where: ProjectLinkWhereUniqueInput
    /**
     * In case the ProjectLink found by the `where` argument doesn't exist, create a new ProjectLink with this data.
     */
    create: XOR<ProjectLinkCreateInput, ProjectLinkUncheckedCreateInput>
    /**
     * In case the ProjectLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectLinkUpdateInput, ProjectLinkUncheckedUpdateInput>
  }

  /**
   * ProjectLink delete
   */
  export type ProjectLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter which ProjectLink to delete.
     */
    where: ProjectLinkWhereUniqueInput
  }

  /**
   * ProjectLink deleteMany
   */
  export type ProjectLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectLinks to delete
     */
    where?: ProjectLinkWhereInput
    /**
     * Limit how many ProjectLinks to delete.
     */
    limit?: number
  }

  /**
   * ProjectLink without action
   */
  export type ProjectLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    generatedAt: Date | null
    data: string | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    generatedAt: Date | null
    data: string | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    userId: number
    generatedAt: number
    data: number
    _all: number
  }


  export type ResumeMinAggregateInputType = {
    id?: true
    userId?: true
    generatedAt?: true
    data?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    userId?: true
    generatedAt?: true
    data?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    userId?: true
    generatedAt?: true
    data?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    userId: string
    generatedAt: Date
    data: string
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    generatedAt?: boolean
    data?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    generatedAt?: boolean
    data?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    generatedAt?: boolean
    data?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    userId?: boolean
    generatedAt?: boolean
    data?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "generatedAt" | "data", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      generatedAt: Date
      data: string
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
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
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly userId: FieldRef<"Resume", 'String'>
    readonly generatedAt: FieldRef<"Resume", 'DateTime'>
    readonly data: FieldRef<"Resume", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    salary: number | null
  }

  export type JobSumAggregateOutputType = {
    salary: number | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    location: string | null
    salary: number | null
    hrId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    location: string | null
    salary: number | null
    hrId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    description: number
    location: number
    salary: number
    hrId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    salary?: true
  }

  export type JobSumAggregateInputType = {
    salary?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    salary?: true
    hrId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    salary?: true
    hrId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    salary?: true
    hrId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    title: string
    description: string
    location: string | null
    salary: number | null
    hrId: string
    createdAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    salary?: boolean
    hrId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hr?: boolean | HRDefaultArgs<ExtArgs>
    matched?: boolean | Job$matchedArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    salary?: boolean
    hrId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hr?: boolean | HRDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    salary?: boolean
    hrId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hr?: boolean | HRDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    salary?: boolean
    hrId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "location" | "salary" | "hrId" | "createdAt" | "updatedAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hr?: boolean | HRDefaultArgs<ExtArgs>
    matched?: boolean | Job$matchedArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hr?: boolean | HRDefaultArgs<ExtArgs>
  }
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hr?: boolean | HRDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      hr: Prisma.$HRPayload<ExtArgs>
      matched: Prisma.$MatchedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      location: string | null
      salary: number | null
      hrId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
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
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hr<T extends HRDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HRDefaultArgs<ExtArgs>>): Prisma__HRClient<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matched<T extends Job$matchedArgs<ExtArgs> = {}>(args?: Subset<T, Job$matchedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly title: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly location: FieldRef<"Job", 'String'>
    readonly salary: FieldRef<"Job", 'Float'>
    readonly hrId: FieldRef<"Job", 'String'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.matched
   */
  export type Job$matchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedInclude<ExtArgs> | null
    where?: MatchedWhereInput
    orderBy?: MatchedOrderByWithRelationInput | MatchedOrderByWithRelationInput[]
    cursor?: MatchedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchedScalarFieldEnum | MatchedScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model HR
   */

  export type AggregateHR = {
    _count: HRCountAggregateOutputType | null
    _min: HRMinAggregateOutputType | null
    _max: HRMaxAggregateOutputType | null
  }

  export type HRMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HRMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HRCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HRMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HRMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HRCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HRAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HR to aggregate.
     */
    where?: HRWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HRS to fetch.
     */
    orderBy?: HROrderByWithRelationInput | HROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HRWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HRS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HRS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HRS
    **/
    _count?: true | HRCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HRMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HRMaxAggregateInputType
  }

  export type GetHRAggregateType<T extends HRAggregateArgs> = {
        [P in keyof T & keyof AggregateHR]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHR[P]>
      : GetScalarType<T[P], AggregateHR[P]>
  }




  export type HRGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HRWhereInput
    orderBy?: HROrderByWithAggregationInput | HROrderByWithAggregationInput[]
    by: HRScalarFieldEnum[] | HRScalarFieldEnum
    having?: HRScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HRCountAggregateInputType | true
    _min?: HRMinAggregateInputType
    _max?: HRMaxAggregateInputType
  }

  export type HRGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: HRCountAggregateOutputType | null
    _min: HRMinAggregateOutputType | null
    _max: HRMaxAggregateOutputType | null
  }

  type GetHRGroupByPayload<T extends HRGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HRGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HRGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HRGroupByOutputType[P]>
            : GetScalarType<T[P], HRGroupByOutputType[P]>
        }
      >
    >


  export type HRSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobs?: boolean | HR$jobsArgs<ExtArgs>
    _count?: boolean | HRCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hR"]>

  export type HRSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hR"]>

  export type HRSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hR"]>

  export type HRSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["hR"]>
  export type HRInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | HR$jobsArgs<ExtArgs>
    _count?: boolean | HRCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HRIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HRIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HRPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HR"
    objects: {
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hR"]>
    composites: {}
  }

  type HRGetPayload<S extends boolean | null | undefined | HRDefaultArgs> = $Result.GetResult<Prisma.$HRPayload, S>

  type HRCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HRFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HRCountAggregateInputType | true
    }

  export interface HRDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HR'], meta: { name: 'HR' } }
    /**
     * Find zero or one HR that matches the filter.
     * @param {HRFindUniqueArgs} args - Arguments to find a HR
     * @example
     * // Get one HR
     * const hR = await prisma.hR.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HRFindUniqueArgs>(args: SelectSubset<T, HRFindUniqueArgs<ExtArgs>>): Prisma__HRClient<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HR that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HRFindUniqueOrThrowArgs} args - Arguments to find a HR
     * @example
     * // Get one HR
     * const hR = await prisma.hR.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HRFindUniqueOrThrowArgs>(args: SelectSubset<T, HRFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HRClient<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HR that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRFindFirstArgs} args - Arguments to find a HR
     * @example
     * // Get one HR
     * const hR = await prisma.hR.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HRFindFirstArgs>(args?: SelectSubset<T, HRFindFirstArgs<ExtArgs>>): Prisma__HRClient<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HR that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRFindFirstOrThrowArgs} args - Arguments to find a HR
     * @example
     * // Get one HR
     * const hR = await prisma.hR.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HRFindFirstOrThrowArgs>(args?: SelectSubset<T, HRFindFirstOrThrowArgs<ExtArgs>>): Prisma__HRClient<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HRS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HRS
     * const hRS = await prisma.hR.findMany()
     * 
     * // Get first 10 HRS
     * const hRS = await prisma.hR.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hRWithIdOnly = await prisma.hR.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HRFindManyArgs>(args?: SelectSubset<T, HRFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HR.
     * @param {HRCreateArgs} args - Arguments to create a HR.
     * @example
     * // Create one HR
     * const HR = await prisma.hR.create({
     *   data: {
     *     // ... data to create a HR
     *   }
     * })
     * 
     */
    create<T extends HRCreateArgs>(args: SelectSubset<T, HRCreateArgs<ExtArgs>>): Prisma__HRClient<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HRS.
     * @param {HRCreateManyArgs} args - Arguments to create many HRS.
     * @example
     * // Create many HRS
     * const hR = await prisma.hR.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HRCreateManyArgs>(args?: SelectSubset<T, HRCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HRS and returns the data saved in the database.
     * @param {HRCreateManyAndReturnArgs} args - Arguments to create many HRS.
     * @example
     * // Create many HRS
     * const hR = await prisma.hR.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HRS and only return the `id`
     * const hRWithIdOnly = await prisma.hR.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HRCreateManyAndReturnArgs>(args?: SelectSubset<T, HRCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HR.
     * @param {HRDeleteArgs} args - Arguments to delete one HR.
     * @example
     * // Delete one HR
     * const HR = await prisma.hR.delete({
     *   where: {
     *     // ... filter to delete one HR
     *   }
     * })
     * 
     */
    delete<T extends HRDeleteArgs>(args: SelectSubset<T, HRDeleteArgs<ExtArgs>>): Prisma__HRClient<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HR.
     * @param {HRUpdateArgs} args - Arguments to update one HR.
     * @example
     * // Update one HR
     * const hR = await prisma.hR.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HRUpdateArgs>(args: SelectSubset<T, HRUpdateArgs<ExtArgs>>): Prisma__HRClient<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HRS.
     * @param {HRDeleteManyArgs} args - Arguments to filter HRS to delete.
     * @example
     * // Delete a few HRS
     * const { count } = await prisma.hR.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HRDeleteManyArgs>(args?: SelectSubset<T, HRDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HRS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HRS
     * const hR = await prisma.hR.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HRUpdateManyArgs>(args: SelectSubset<T, HRUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HRS and returns the data updated in the database.
     * @param {HRUpdateManyAndReturnArgs} args - Arguments to update many HRS.
     * @example
     * // Update many HRS
     * const hR = await prisma.hR.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HRS and only return the `id`
     * const hRWithIdOnly = await prisma.hR.updateManyAndReturn({
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
    updateManyAndReturn<T extends HRUpdateManyAndReturnArgs>(args: SelectSubset<T, HRUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HR.
     * @param {HRUpsertArgs} args - Arguments to update or create a HR.
     * @example
     * // Update or create a HR
     * const hR = await prisma.hR.upsert({
     *   create: {
     *     // ... data to create a HR
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HR we want to update
     *   }
     * })
     */
    upsert<T extends HRUpsertArgs>(args: SelectSubset<T, HRUpsertArgs<ExtArgs>>): Prisma__HRClient<$Result.GetResult<Prisma.$HRPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HRS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRCountArgs} args - Arguments to filter HRS to count.
     * @example
     * // Count the number of HRS
     * const count = await prisma.hR.count({
     *   where: {
     *     // ... the filter for the HRS we want to count
     *   }
     * })
    **/
    count<T extends HRCountArgs>(
      args?: Subset<T, HRCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HRCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HR.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HRAggregateArgs>(args: Subset<T, HRAggregateArgs>): Prisma.PrismaPromise<GetHRAggregateType<T>>

    /**
     * Group by HR.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRGroupByArgs} args - Group by arguments.
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
      T extends HRGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HRGroupByArgs['orderBy'] }
        : { orderBy?: HRGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HRGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHRGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HR model
   */
  readonly fields: HRFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HR.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HRClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends HR$jobsArgs<ExtArgs> = {}>(args?: Subset<T, HR$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the HR model
   */
  interface HRFieldRefs {
    readonly id: FieldRef<"HR", 'String'>
    readonly email: FieldRef<"HR", 'String'>
    readonly password: FieldRef<"HR", 'String'>
    readonly createdAt: FieldRef<"HR", 'DateTime'>
    readonly updatedAt: FieldRef<"HR", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HR findUnique
   */
  export type HRFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRInclude<ExtArgs> | null
    /**
     * Filter, which HR to fetch.
     */
    where: HRWhereUniqueInput
  }

  /**
   * HR findUniqueOrThrow
   */
  export type HRFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRInclude<ExtArgs> | null
    /**
     * Filter, which HR to fetch.
     */
    where: HRWhereUniqueInput
  }

  /**
   * HR findFirst
   */
  export type HRFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRInclude<ExtArgs> | null
    /**
     * Filter, which HR to fetch.
     */
    where?: HRWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HRS to fetch.
     */
    orderBy?: HROrderByWithRelationInput | HROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HRS.
     */
    cursor?: HRWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HRS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HRS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HRS.
     */
    distinct?: HRScalarFieldEnum | HRScalarFieldEnum[]
  }

  /**
   * HR findFirstOrThrow
   */
  export type HRFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRInclude<ExtArgs> | null
    /**
     * Filter, which HR to fetch.
     */
    where?: HRWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HRS to fetch.
     */
    orderBy?: HROrderByWithRelationInput | HROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HRS.
     */
    cursor?: HRWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HRS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HRS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HRS.
     */
    distinct?: HRScalarFieldEnum | HRScalarFieldEnum[]
  }

  /**
   * HR findMany
   */
  export type HRFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRInclude<ExtArgs> | null
    /**
     * Filter, which HRS to fetch.
     */
    where?: HRWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HRS to fetch.
     */
    orderBy?: HROrderByWithRelationInput | HROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HRS.
     */
    cursor?: HRWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HRS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HRS.
     */
    skip?: number
    distinct?: HRScalarFieldEnum | HRScalarFieldEnum[]
  }

  /**
   * HR create
   */
  export type HRCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRInclude<ExtArgs> | null
    /**
     * The data needed to create a HR.
     */
    data: XOR<HRCreateInput, HRUncheckedCreateInput>
  }

  /**
   * HR createMany
   */
  export type HRCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HRS.
     */
    data: HRCreateManyInput | HRCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HR createManyAndReturn
   */
  export type HRCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * The data used to create many HRS.
     */
    data: HRCreateManyInput | HRCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HR update
   */
  export type HRUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRInclude<ExtArgs> | null
    /**
     * The data needed to update a HR.
     */
    data: XOR<HRUpdateInput, HRUncheckedUpdateInput>
    /**
     * Choose, which HR to update.
     */
    where: HRWhereUniqueInput
  }

  /**
   * HR updateMany
   */
  export type HRUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HRS.
     */
    data: XOR<HRUpdateManyMutationInput, HRUncheckedUpdateManyInput>
    /**
     * Filter which HRS to update
     */
    where?: HRWhereInput
    /**
     * Limit how many HRS to update.
     */
    limit?: number
  }

  /**
   * HR updateManyAndReturn
   */
  export type HRUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * The data used to update HRS.
     */
    data: XOR<HRUpdateManyMutationInput, HRUncheckedUpdateManyInput>
    /**
     * Filter which HRS to update
     */
    where?: HRWhereInput
    /**
     * Limit how many HRS to update.
     */
    limit?: number
  }

  /**
   * HR upsert
   */
  export type HRUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRInclude<ExtArgs> | null
    /**
     * The filter to search for the HR to update in case it exists.
     */
    where: HRWhereUniqueInput
    /**
     * In case the HR found by the `where` argument doesn't exist, create a new HR with this data.
     */
    create: XOR<HRCreateInput, HRUncheckedCreateInput>
    /**
     * In case the HR was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HRUpdateInput, HRUncheckedUpdateInput>
  }

  /**
   * HR delete
   */
  export type HRDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRInclude<ExtArgs> | null
    /**
     * Filter which HR to delete.
     */
    where: HRWhereUniqueInput
  }

  /**
   * HR deleteMany
   */
  export type HRDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HRS to delete
     */
    where?: HRWhereInput
    /**
     * Limit how many HRS to delete.
     */
    limit?: number
  }

  /**
   * HR.jobs
   */
  export type HR$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * HR without action
   */
  export type HRDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HR
     */
    select?: HRSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HR
     */
    omit?: HROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRInclude<ExtArgs> | null
  }


  /**
   * Model Matched
   */

  export type AggregateMatched = {
    _count: MatchedCountAggregateOutputType | null
    _min: MatchedMinAggregateOutputType | null
    _max: MatchedMaxAggregateOutputType | null
  }

  export type MatchedMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    matchedAt: Date | null
  }

  export type MatchedMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    matchedAt: Date | null
  }

  export type MatchedCountAggregateOutputType = {
    id: number
    jobId: number
    matchedAt: number
    _all: number
  }


  export type MatchedMinAggregateInputType = {
    id?: true
    jobId?: true
    matchedAt?: true
  }

  export type MatchedMaxAggregateInputType = {
    id?: true
    jobId?: true
    matchedAt?: true
  }

  export type MatchedCountAggregateInputType = {
    id?: true
    jobId?: true
    matchedAt?: true
    _all?: true
  }

  export type MatchedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matched to aggregate.
     */
    where?: MatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matcheds to fetch.
     */
    orderBy?: MatchedOrderByWithRelationInput | MatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matcheds
    **/
    _count?: true | MatchedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchedMaxAggregateInputType
  }

  export type GetMatchedAggregateType<T extends MatchedAggregateArgs> = {
        [P in keyof T & keyof AggregateMatched]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatched[P]>
      : GetScalarType<T[P], AggregateMatched[P]>
  }




  export type MatchedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchedWhereInput
    orderBy?: MatchedOrderByWithAggregationInput | MatchedOrderByWithAggregationInput[]
    by: MatchedScalarFieldEnum[] | MatchedScalarFieldEnum
    having?: MatchedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchedCountAggregateInputType | true
    _min?: MatchedMinAggregateInputType
    _max?: MatchedMaxAggregateInputType
  }

  export type MatchedGroupByOutputType = {
    id: string
    jobId: string
    matchedAt: Date
    _count: MatchedCountAggregateOutputType | null
    _min: MatchedMinAggregateOutputType | null
    _max: MatchedMaxAggregateOutputType | null
  }

  type GetMatchedGroupByPayload<T extends MatchedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchedGroupByOutputType[P]>
            : GetScalarType<T[P], MatchedGroupByOutputType[P]>
        }
      >
    >


  export type MatchedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    matchedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    userIds?: boolean | Matched$userIdsArgs<ExtArgs>
    _count?: boolean | MatchedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matched"]>

  export type MatchedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    matchedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matched"]>

  export type MatchedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    matchedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matched"]>

  export type MatchedSelectScalar = {
    id?: boolean
    jobId?: boolean
    matchedAt?: boolean
  }

  export type MatchedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "matchedAt", ExtArgs["result"]["matched"]>
  export type MatchedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    userIds?: boolean | Matched$userIdsArgs<ExtArgs>
    _count?: boolean | MatchedCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type MatchedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $MatchedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matched"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      userIds: Prisma.$KvPairPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      matchedAt: Date
    }, ExtArgs["result"]["matched"]>
    composites: {}
  }

  type MatchedGetPayload<S extends boolean | null | undefined | MatchedDefaultArgs> = $Result.GetResult<Prisma.$MatchedPayload, S>

  type MatchedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchedCountAggregateInputType | true
    }

  export interface MatchedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matched'], meta: { name: 'Matched' } }
    /**
     * Find zero or one Matched that matches the filter.
     * @param {MatchedFindUniqueArgs} args - Arguments to find a Matched
     * @example
     * // Get one Matched
     * const matched = await prisma.matched.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchedFindUniqueArgs>(args: SelectSubset<T, MatchedFindUniqueArgs<ExtArgs>>): Prisma__MatchedClient<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matched that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchedFindUniqueOrThrowArgs} args - Arguments to find a Matched
     * @example
     * // Get one Matched
     * const matched = await prisma.matched.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchedFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchedClient<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matched that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchedFindFirstArgs} args - Arguments to find a Matched
     * @example
     * // Get one Matched
     * const matched = await prisma.matched.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchedFindFirstArgs>(args?: SelectSubset<T, MatchedFindFirstArgs<ExtArgs>>): Prisma__MatchedClient<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matched that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchedFindFirstOrThrowArgs} args - Arguments to find a Matched
     * @example
     * // Get one Matched
     * const matched = await prisma.matched.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchedFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchedFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchedClient<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matcheds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matcheds
     * const matcheds = await prisma.matched.findMany()
     * 
     * // Get first 10 Matcheds
     * const matcheds = await prisma.matched.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchedWithIdOnly = await prisma.matched.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchedFindManyArgs>(args?: SelectSubset<T, MatchedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matched.
     * @param {MatchedCreateArgs} args - Arguments to create a Matched.
     * @example
     * // Create one Matched
     * const Matched = await prisma.matched.create({
     *   data: {
     *     // ... data to create a Matched
     *   }
     * })
     * 
     */
    create<T extends MatchedCreateArgs>(args: SelectSubset<T, MatchedCreateArgs<ExtArgs>>): Prisma__MatchedClient<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matcheds.
     * @param {MatchedCreateManyArgs} args - Arguments to create many Matcheds.
     * @example
     * // Create many Matcheds
     * const matched = await prisma.matched.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchedCreateManyArgs>(args?: SelectSubset<T, MatchedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matcheds and returns the data saved in the database.
     * @param {MatchedCreateManyAndReturnArgs} args - Arguments to create many Matcheds.
     * @example
     * // Create many Matcheds
     * const matched = await prisma.matched.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matcheds and only return the `id`
     * const matchedWithIdOnly = await prisma.matched.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchedCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matched.
     * @param {MatchedDeleteArgs} args - Arguments to delete one Matched.
     * @example
     * // Delete one Matched
     * const Matched = await prisma.matched.delete({
     *   where: {
     *     // ... filter to delete one Matched
     *   }
     * })
     * 
     */
    delete<T extends MatchedDeleteArgs>(args: SelectSubset<T, MatchedDeleteArgs<ExtArgs>>): Prisma__MatchedClient<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matched.
     * @param {MatchedUpdateArgs} args - Arguments to update one Matched.
     * @example
     * // Update one Matched
     * const matched = await prisma.matched.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchedUpdateArgs>(args: SelectSubset<T, MatchedUpdateArgs<ExtArgs>>): Prisma__MatchedClient<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matcheds.
     * @param {MatchedDeleteManyArgs} args - Arguments to filter Matcheds to delete.
     * @example
     * // Delete a few Matcheds
     * const { count } = await prisma.matched.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchedDeleteManyArgs>(args?: SelectSubset<T, MatchedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matcheds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matcheds
     * const matched = await prisma.matched.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchedUpdateManyArgs>(args: SelectSubset<T, MatchedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matcheds and returns the data updated in the database.
     * @param {MatchedUpdateManyAndReturnArgs} args - Arguments to update many Matcheds.
     * @example
     * // Update many Matcheds
     * const matched = await prisma.matched.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matcheds and only return the `id`
     * const matchedWithIdOnly = await prisma.matched.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchedUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matched.
     * @param {MatchedUpsertArgs} args - Arguments to update or create a Matched.
     * @example
     * // Update or create a Matched
     * const matched = await prisma.matched.upsert({
     *   create: {
     *     // ... data to create a Matched
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matched we want to update
     *   }
     * })
     */
    upsert<T extends MatchedUpsertArgs>(args: SelectSubset<T, MatchedUpsertArgs<ExtArgs>>): Prisma__MatchedClient<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matcheds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchedCountArgs} args - Arguments to filter Matcheds to count.
     * @example
     * // Count the number of Matcheds
     * const count = await prisma.matched.count({
     *   where: {
     *     // ... the filter for the Matcheds we want to count
     *   }
     * })
    **/
    count<T extends MatchedCountArgs>(
      args?: Subset<T, MatchedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matched.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchedAggregateArgs>(args: Subset<T, MatchedAggregateArgs>): Prisma.PrismaPromise<GetMatchedAggregateType<T>>

    /**
     * Group by Matched.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchedGroupByArgs} args - Group by arguments.
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
      T extends MatchedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchedGroupByArgs['orderBy'] }
        : { orderBy?: MatchedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matched model
   */
  readonly fields: MatchedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matched.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userIds<T extends Matched$userIdsArgs<ExtArgs> = {}>(args?: Subset<T, Matched$userIdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Matched model
   */
  interface MatchedFieldRefs {
    readonly id: FieldRef<"Matched", 'String'>
    readonly jobId: FieldRef<"Matched", 'String'>
    readonly matchedAt: FieldRef<"Matched", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Matched findUnique
   */
  export type MatchedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedInclude<ExtArgs> | null
    /**
     * Filter, which Matched to fetch.
     */
    where: MatchedWhereUniqueInput
  }

  /**
   * Matched findUniqueOrThrow
   */
  export type MatchedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedInclude<ExtArgs> | null
    /**
     * Filter, which Matched to fetch.
     */
    where: MatchedWhereUniqueInput
  }

  /**
   * Matched findFirst
   */
  export type MatchedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedInclude<ExtArgs> | null
    /**
     * Filter, which Matched to fetch.
     */
    where?: MatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matcheds to fetch.
     */
    orderBy?: MatchedOrderByWithRelationInput | MatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matcheds.
     */
    cursor?: MatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matcheds.
     */
    distinct?: MatchedScalarFieldEnum | MatchedScalarFieldEnum[]
  }

  /**
   * Matched findFirstOrThrow
   */
  export type MatchedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedInclude<ExtArgs> | null
    /**
     * Filter, which Matched to fetch.
     */
    where?: MatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matcheds to fetch.
     */
    orderBy?: MatchedOrderByWithRelationInput | MatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matcheds.
     */
    cursor?: MatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matcheds.
     */
    distinct?: MatchedScalarFieldEnum | MatchedScalarFieldEnum[]
  }

  /**
   * Matched findMany
   */
  export type MatchedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedInclude<ExtArgs> | null
    /**
     * Filter, which Matcheds to fetch.
     */
    where?: MatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matcheds to fetch.
     */
    orderBy?: MatchedOrderByWithRelationInput | MatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matcheds.
     */
    cursor?: MatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matcheds.
     */
    skip?: number
    distinct?: MatchedScalarFieldEnum | MatchedScalarFieldEnum[]
  }

  /**
   * Matched create
   */
  export type MatchedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedInclude<ExtArgs> | null
    /**
     * The data needed to create a Matched.
     */
    data: XOR<MatchedCreateInput, MatchedUncheckedCreateInput>
  }

  /**
   * Matched createMany
   */
  export type MatchedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matcheds.
     */
    data: MatchedCreateManyInput | MatchedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matched createManyAndReturn
   */
  export type MatchedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * The data used to create many Matcheds.
     */
    data: MatchedCreateManyInput | MatchedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matched update
   */
  export type MatchedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedInclude<ExtArgs> | null
    /**
     * The data needed to update a Matched.
     */
    data: XOR<MatchedUpdateInput, MatchedUncheckedUpdateInput>
    /**
     * Choose, which Matched to update.
     */
    where: MatchedWhereUniqueInput
  }

  /**
   * Matched updateMany
   */
  export type MatchedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matcheds.
     */
    data: XOR<MatchedUpdateManyMutationInput, MatchedUncheckedUpdateManyInput>
    /**
     * Filter which Matcheds to update
     */
    where?: MatchedWhereInput
    /**
     * Limit how many Matcheds to update.
     */
    limit?: number
  }

  /**
   * Matched updateManyAndReturn
   */
  export type MatchedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * The data used to update Matcheds.
     */
    data: XOR<MatchedUpdateManyMutationInput, MatchedUncheckedUpdateManyInput>
    /**
     * Filter which Matcheds to update
     */
    where?: MatchedWhereInput
    /**
     * Limit how many Matcheds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matched upsert
   */
  export type MatchedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedInclude<ExtArgs> | null
    /**
     * The filter to search for the Matched to update in case it exists.
     */
    where: MatchedWhereUniqueInput
    /**
     * In case the Matched found by the `where` argument doesn't exist, create a new Matched with this data.
     */
    create: XOR<MatchedCreateInput, MatchedUncheckedCreateInput>
    /**
     * In case the Matched was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchedUpdateInput, MatchedUncheckedUpdateInput>
  }

  /**
   * Matched delete
   */
  export type MatchedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedInclude<ExtArgs> | null
    /**
     * Filter which Matched to delete.
     */
    where: MatchedWhereUniqueInput
  }

  /**
   * Matched deleteMany
   */
  export type MatchedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matcheds to delete
     */
    where?: MatchedWhereInput
    /**
     * Limit how many Matcheds to delete.
     */
    limit?: number
  }

  /**
   * Matched.userIds
   */
  export type Matched$userIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairInclude<ExtArgs> | null
    where?: KvPairWhereInput
    orderBy?: KvPairOrderByWithRelationInput | KvPairOrderByWithRelationInput[]
    cursor?: KvPairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KvPairScalarFieldEnum | KvPairScalarFieldEnum[]
  }

  /**
   * Matched without action
   */
  export type MatchedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matched
     */
    select?: MatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matched
     */
    omit?: MatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchedInclude<ExtArgs> | null
  }


  /**
   * Model KvPair
   */

  export type AggregateKvPair = {
    _count: KvPairCountAggregateOutputType | null
    _avg: KvPairAvgAggregateOutputType | null
    _sum: KvPairSumAggregateOutputType | null
    _min: KvPairMinAggregateOutputType | null
    _max: KvPairMaxAggregateOutputType | null
  }

  export type KvPairAvgAggregateOutputType = {
    matchedPercentage: number | null
  }

  export type KvPairSumAggregateOutputType = {
    matchedPercentage: number | null
  }

  export type KvPairMinAggregateOutputType = {
    id: string | null
    userId: string | null
    matchedPercentage: number | null
    matchedId: string | null
  }

  export type KvPairMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    matchedPercentage: number | null
    matchedId: string | null
  }

  export type KvPairCountAggregateOutputType = {
    id: number
    userId: number
    matchedPercentage: number
    matchedId: number
    _all: number
  }


  export type KvPairAvgAggregateInputType = {
    matchedPercentage?: true
  }

  export type KvPairSumAggregateInputType = {
    matchedPercentage?: true
  }

  export type KvPairMinAggregateInputType = {
    id?: true
    userId?: true
    matchedPercentage?: true
    matchedId?: true
  }

  export type KvPairMaxAggregateInputType = {
    id?: true
    userId?: true
    matchedPercentage?: true
    matchedId?: true
  }

  export type KvPairCountAggregateInputType = {
    id?: true
    userId?: true
    matchedPercentage?: true
    matchedId?: true
    _all?: true
  }

  export type KvPairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KvPair to aggregate.
     */
    where?: KvPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KvPairs to fetch.
     */
    orderBy?: KvPairOrderByWithRelationInput | KvPairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KvPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KvPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KvPairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KvPairs
    **/
    _count?: true | KvPairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KvPairAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KvPairSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KvPairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KvPairMaxAggregateInputType
  }

  export type GetKvPairAggregateType<T extends KvPairAggregateArgs> = {
        [P in keyof T & keyof AggregateKvPair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKvPair[P]>
      : GetScalarType<T[P], AggregateKvPair[P]>
  }




  export type KvPairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KvPairWhereInput
    orderBy?: KvPairOrderByWithAggregationInput | KvPairOrderByWithAggregationInput[]
    by: KvPairScalarFieldEnum[] | KvPairScalarFieldEnum
    having?: KvPairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KvPairCountAggregateInputType | true
    _avg?: KvPairAvgAggregateInputType
    _sum?: KvPairSumAggregateInputType
    _min?: KvPairMinAggregateInputType
    _max?: KvPairMaxAggregateInputType
  }

  export type KvPairGroupByOutputType = {
    id: string
    userId: string
    matchedPercentage: number
    matchedId: string
    _count: KvPairCountAggregateOutputType | null
    _avg: KvPairAvgAggregateOutputType | null
    _sum: KvPairSumAggregateOutputType | null
    _min: KvPairMinAggregateOutputType | null
    _max: KvPairMaxAggregateOutputType | null
  }

  type GetKvPairGroupByPayload<T extends KvPairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KvPairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KvPairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KvPairGroupByOutputType[P]>
            : GetScalarType<T[P], KvPairGroupByOutputType[P]>
        }
      >
    >


  export type KvPairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchedPercentage?: boolean
    matchedId?: boolean
    Matched?: boolean | MatchedDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kvPair"]>

  export type KvPairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchedPercentage?: boolean
    matchedId?: boolean
    Matched?: boolean | MatchedDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kvPair"]>

  export type KvPairSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchedPercentage?: boolean
    matchedId?: boolean
    Matched?: boolean | MatchedDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kvPair"]>

  export type KvPairSelectScalar = {
    id?: boolean
    userId?: boolean
    matchedPercentage?: boolean
    matchedId?: boolean
  }

  export type KvPairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "matchedPercentage" | "matchedId", ExtArgs["result"]["kvPair"]>
  export type KvPairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Matched?: boolean | MatchedDefaultArgs<ExtArgs>
  }
  export type KvPairIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Matched?: boolean | MatchedDefaultArgs<ExtArgs>
  }
  export type KvPairIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Matched?: boolean | MatchedDefaultArgs<ExtArgs>
  }

  export type $KvPairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KvPair"
    objects: {
      Matched: Prisma.$MatchedPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      matchedPercentage: number
      matchedId: string
    }, ExtArgs["result"]["kvPair"]>
    composites: {}
  }

  type KvPairGetPayload<S extends boolean | null | undefined | KvPairDefaultArgs> = $Result.GetResult<Prisma.$KvPairPayload, S>

  type KvPairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KvPairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KvPairCountAggregateInputType | true
    }

  export interface KvPairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KvPair'], meta: { name: 'KvPair' } }
    /**
     * Find zero or one KvPair that matches the filter.
     * @param {KvPairFindUniqueArgs} args - Arguments to find a KvPair
     * @example
     * // Get one KvPair
     * const kvPair = await prisma.kvPair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KvPairFindUniqueArgs>(args: SelectSubset<T, KvPairFindUniqueArgs<ExtArgs>>): Prisma__KvPairClient<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KvPair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KvPairFindUniqueOrThrowArgs} args - Arguments to find a KvPair
     * @example
     * // Get one KvPair
     * const kvPair = await prisma.kvPair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KvPairFindUniqueOrThrowArgs>(args: SelectSubset<T, KvPairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KvPairClient<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KvPair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvPairFindFirstArgs} args - Arguments to find a KvPair
     * @example
     * // Get one KvPair
     * const kvPair = await prisma.kvPair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KvPairFindFirstArgs>(args?: SelectSubset<T, KvPairFindFirstArgs<ExtArgs>>): Prisma__KvPairClient<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KvPair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvPairFindFirstOrThrowArgs} args - Arguments to find a KvPair
     * @example
     * // Get one KvPair
     * const kvPair = await prisma.kvPair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KvPairFindFirstOrThrowArgs>(args?: SelectSubset<T, KvPairFindFirstOrThrowArgs<ExtArgs>>): Prisma__KvPairClient<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KvPairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvPairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KvPairs
     * const kvPairs = await prisma.kvPair.findMany()
     * 
     * // Get first 10 KvPairs
     * const kvPairs = await prisma.kvPair.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kvPairWithIdOnly = await prisma.kvPair.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KvPairFindManyArgs>(args?: SelectSubset<T, KvPairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KvPair.
     * @param {KvPairCreateArgs} args - Arguments to create a KvPair.
     * @example
     * // Create one KvPair
     * const KvPair = await prisma.kvPair.create({
     *   data: {
     *     // ... data to create a KvPair
     *   }
     * })
     * 
     */
    create<T extends KvPairCreateArgs>(args: SelectSubset<T, KvPairCreateArgs<ExtArgs>>): Prisma__KvPairClient<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KvPairs.
     * @param {KvPairCreateManyArgs} args - Arguments to create many KvPairs.
     * @example
     * // Create many KvPairs
     * const kvPair = await prisma.kvPair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KvPairCreateManyArgs>(args?: SelectSubset<T, KvPairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KvPairs and returns the data saved in the database.
     * @param {KvPairCreateManyAndReturnArgs} args - Arguments to create many KvPairs.
     * @example
     * // Create many KvPairs
     * const kvPair = await prisma.kvPair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KvPairs and only return the `id`
     * const kvPairWithIdOnly = await prisma.kvPair.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KvPairCreateManyAndReturnArgs>(args?: SelectSubset<T, KvPairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KvPair.
     * @param {KvPairDeleteArgs} args - Arguments to delete one KvPair.
     * @example
     * // Delete one KvPair
     * const KvPair = await prisma.kvPair.delete({
     *   where: {
     *     // ... filter to delete one KvPair
     *   }
     * })
     * 
     */
    delete<T extends KvPairDeleteArgs>(args: SelectSubset<T, KvPairDeleteArgs<ExtArgs>>): Prisma__KvPairClient<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KvPair.
     * @param {KvPairUpdateArgs} args - Arguments to update one KvPair.
     * @example
     * // Update one KvPair
     * const kvPair = await prisma.kvPair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KvPairUpdateArgs>(args: SelectSubset<T, KvPairUpdateArgs<ExtArgs>>): Prisma__KvPairClient<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KvPairs.
     * @param {KvPairDeleteManyArgs} args - Arguments to filter KvPairs to delete.
     * @example
     * // Delete a few KvPairs
     * const { count } = await prisma.kvPair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KvPairDeleteManyArgs>(args?: SelectSubset<T, KvPairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KvPairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvPairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KvPairs
     * const kvPair = await prisma.kvPair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KvPairUpdateManyArgs>(args: SelectSubset<T, KvPairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KvPairs and returns the data updated in the database.
     * @param {KvPairUpdateManyAndReturnArgs} args - Arguments to update many KvPairs.
     * @example
     * // Update many KvPairs
     * const kvPair = await prisma.kvPair.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KvPairs and only return the `id`
     * const kvPairWithIdOnly = await prisma.kvPair.updateManyAndReturn({
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
    updateManyAndReturn<T extends KvPairUpdateManyAndReturnArgs>(args: SelectSubset<T, KvPairUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KvPair.
     * @param {KvPairUpsertArgs} args - Arguments to update or create a KvPair.
     * @example
     * // Update or create a KvPair
     * const kvPair = await prisma.kvPair.upsert({
     *   create: {
     *     // ... data to create a KvPair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KvPair we want to update
     *   }
     * })
     */
    upsert<T extends KvPairUpsertArgs>(args: SelectSubset<T, KvPairUpsertArgs<ExtArgs>>): Prisma__KvPairClient<$Result.GetResult<Prisma.$KvPairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KvPairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvPairCountArgs} args - Arguments to filter KvPairs to count.
     * @example
     * // Count the number of KvPairs
     * const count = await prisma.kvPair.count({
     *   where: {
     *     // ... the filter for the KvPairs we want to count
     *   }
     * })
    **/
    count<T extends KvPairCountArgs>(
      args?: Subset<T, KvPairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KvPairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KvPair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvPairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KvPairAggregateArgs>(args: Subset<T, KvPairAggregateArgs>): Prisma.PrismaPromise<GetKvPairAggregateType<T>>

    /**
     * Group by KvPair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KvPairGroupByArgs} args - Group by arguments.
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
      T extends KvPairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KvPairGroupByArgs['orderBy'] }
        : { orderBy?: KvPairGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KvPairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKvPairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KvPair model
   */
  readonly fields: KvPairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KvPair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KvPairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Matched<T extends MatchedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchedDefaultArgs<ExtArgs>>): Prisma__MatchedClient<$Result.GetResult<Prisma.$MatchedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the KvPair model
   */
  interface KvPairFieldRefs {
    readonly id: FieldRef<"KvPair", 'String'>
    readonly userId: FieldRef<"KvPair", 'String'>
    readonly matchedPercentage: FieldRef<"KvPair", 'Float'>
    readonly matchedId: FieldRef<"KvPair", 'String'>
  }
    

  // Custom InputTypes
  /**
   * KvPair findUnique
   */
  export type KvPairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairInclude<ExtArgs> | null
    /**
     * Filter, which KvPair to fetch.
     */
    where: KvPairWhereUniqueInput
  }

  /**
   * KvPair findUniqueOrThrow
   */
  export type KvPairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairInclude<ExtArgs> | null
    /**
     * Filter, which KvPair to fetch.
     */
    where: KvPairWhereUniqueInput
  }

  /**
   * KvPair findFirst
   */
  export type KvPairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairInclude<ExtArgs> | null
    /**
     * Filter, which KvPair to fetch.
     */
    where?: KvPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KvPairs to fetch.
     */
    orderBy?: KvPairOrderByWithRelationInput | KvPairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KvPairs.
     */
    cursor?: KvPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KvPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KvPairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KvPairs.
     */
    distinct?: KvPairScalarFieldEnum | KvPairScalarFieldEnum[]
  }

  /**
   * KvPair findFirstOrThrow
   */
  export type KvPairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairInclude<ExtArgs> | null
    /**
     * Filter, which KvPair to fetch.
     */
    where?: KvPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KvPairs to fetch.
     */
    orderBy?: KvPairOrderByWithRelationInput | KvPairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KvPairs.
     */
    cursor?: KvPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KvPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KvPairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KvPairs.
     */
    distinct?: KvPairScalarFieldEnum | KvPairScalarFieldEnum[]
  }

  /**
   * KvPair findMany
   */
  export type KvPairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairInclude<ExtArgs> | null
    /**
     * Filter, which KvPairs to fetch.
     */
    where?: KvPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KvPairs to fetch.
     */
    orderBy?: KvPairOrderByWithRelationInput | KvPairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KvPairs.
     */
    cursor?: KvPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KvPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KvPairs.
     */
    skip?: number
    distinct?: KvPairScalarFieldEnum | KvPairScalarFieldEnum[]
  }

  /**
   * KvPair create
   */
  export type KvPairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairInclude<ExtArgs> | null
    /**
     * The data needed to create a KvPair.
     */
    data: XOR<KvPairCreateInput, KvPairUncheckedCreateInput>
  }

  /**
   * KvPair createMany
   */
  export type KvPairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KvPairs.
     */
    data: KvPairCreateManyInput | KvPairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KvPair createManyAndReturn
   */
  export type KvPairCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * The data used to create many KvPairs.
     */
    data: KvPairCreateManyInput | KvPairCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KvPair update
   */
  export type KvPairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairInclude<ExtArgs> | null
    /**
     * The data needed to update a KvPair.
     */
    data: XOR<KvPairUpdateInput, KvPairUncheckedUpdateInput>
    /**
     * Choose, which KvPair to update.
     */
    where: KvPairWhereUniqueInput
  }

  /**
   * KvPair updateMany
   */
  export type KvPairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KvPairs.
     */
    data: XOR<KvPairUpdateManyMutationInput, KvPairUncheckedUpdateManyInput>
    /**
     * Filter which KvPairs to update
     */
    where?: KvPairWhereInput
    /**
     * Limit how many KvPairs to update.
     */
    limit?: number
  }

  /**
   * KvPair updateManyAndReturn
   */
  export type KvPairUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * The data used to update KvPairs.
     */
    data: XOR<KvPairUpdateManyMutationInput, KvPairUncheckedUpdateManyInput>
    /**
     * Filter which KvPairs to update
     */
    where?: KvPairWhereInput
    /**
     * Limit how many KvPairs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KvPair upsert
   */
  export type KvPairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairInclude<ExtArgs> | null
    /**
     * The filter to search for the KvPair to update in case it exists.
     */
    where: KvPairWhereUniqueInput
    /**
     * In case the KvPair found by the `where` argument doesn't exist, create a new KvPair with this data.
     */
    create: XOR<KvPairCreateInput, KvPairUncheckedCreateInput>
    /**
     * In case the KvPair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KvPairUpdateInput, KvPairUncheckedUpdateInput>
  }

  /**
   * KvPair delete
   */
  export type KvPairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairInclude<ExtArgs> | null
    /**
     * Filter which KvPair to delete.
     */
    where: KvPairWhereUniqueInput
  }

  /**
   * KvPair deleteMany
   */
  export type KvPairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KvPairs to delete
     */
    where?: KvPairWhereInput
    /**
     * Limit how many KvPairs to delete.
     */
    limit?: number
  }

  /**
   * KvPair without action
   */
  export type KvPairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KvPair
     */
    select?: KvPairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KvPair
     */
    omit?: KvPairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KvPairInclude<ExtArgs> | null
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
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    contact: 'contact',
    location: 'location',
    personalWebsite: 'personalWebsite',
    githubProfile: 'githubProfile',
    githubId: 'githubId',
    githubAccessToken: 'githubAccessToken',
    latestRepo: 'latestRepo'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SocialScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    websiteName: 'websiteName',
    url: 'url'
  };

  export type SocialScalarFieldEnum = (typeof SocialScalarFieldEnum)[keyof typeof SocialScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    college: 'college',
    field: 'field',
    startDate: 'startDate',
    endDate: 'endDate',
    completed: 'completed',
    expectedEndDate: 'expectedEndDate',
    GPA: 'GPA',
    CGPA: 'CGPA',
    description: 'description'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    skills: 'skills'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    company: 'company',
    role: 'role',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectLinkScalarFieldEnum: {
    id: 'id',
    type: 'type',
    projectId: 'projectId'
  };

  export type ProjectLinkScalarFieldEnum = (typeof ProjectLinkScalarFieldEnum)[keyof typeof ProjectLinkScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    generatedAt: 'generatedAt',
    data: 'data'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    location: 'location',
    salary: 'salary',
    hrId: 'hrId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const HRScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HRScalarFieldEnum = (typeof HRScalarFieldEnum)[keyof typeof HRScalarFieldEnum]


  export const MatchedScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    matchedAt: 'matchedAt'
  };

  export type MatchedScalarFieldEnum = (typeof MatchedScalarFieldEnum)[keyof typeof MatchedScalarFieldEnum]


  export const KvPairScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    matchedPercentage: 'matchedPercentage',
    matchedId: 'matchedId'
  };

  export type KvPairScalarFieldEnum = (typeof KvPairScalarFieldEnum)[keyof typeof KvPairScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'LinkType'
   */
  export type EnumLinkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LinkType'>
    


  /**
   * Reference to a field of type 'LinkType[]'
   */
  export type ListEnumLinkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LinkType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


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
    userId?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    contact?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    personalWebsite?: StringNullableFilter<"User"> | string | null
    githubProfile?: StringFilter<"User"> | string
    githubId?: StringNullableFilter<"User"> | string | null
    githubAccessToken?: StringNullableFilter<"User"> | string | null
    latestRepo?: StringNullableFilter<"User"> | string | null
    socials?: SocialListRelationFilter
    education?: EducationListRelationFilter
    skills?: SkillListRelationFilter
    experiences?: ExperienceListRelationFilter
    projects?: ProjectListRelationFilter
    resume?: ResumeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    personalWebsite?: SortOrderInput | SortOrder
    githubProfile?: SortOrder
    githubId?: SortOrderInput | SortOrder
    githubAccessToken?: SortOrderInput | SortOrder
    latestRepo?: SortOrderInput | SortOrder
    socials?: SocialOrderByRelationAggregateInput
    education?: EducationOrderByRelationAggregateInput
    skills?: SkillOrderByRelationAggregateInput
    experiences?: ExperienceOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    resume?: ResumeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    githubProfile?: string
    githubId?: string
    githubAccessToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    contact?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    personalWebsite?: StringNullableFilter<"User"> | string | null
    latestRepo?: StringNullableFilter<"User"> | string | null
    socials?: SocialListRelationFilter
    education?: EducationListRelationFilter
    skills?: SkillListRelationFilter
    experiences?: ExperienceListRelationFilter
    projects?: ProjectListRelationFilter
    resume?: ResumeListRelationFilter
  }, "userId" | "githubProfile" | "githubId" | "githubAccessToken">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    personalWebsite?: SortOrderInput | SortOrder
    githubProfile?: SortOrder
    githubId?: SortOrderInput | SortOrder
    githubAccessToken?: SortOrderInput | SortOrder
    latestRepo?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    contact?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    personalWebsite?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubProfile?: StringWithAggregatesFilter<"User"> | string
    githubId?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubAccessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    latestRepo?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SocialWhereInput = {
    AND?: SocialWhereInput | SocialWhereInput[]
    OR?: SocialWhereInput[]
    NOT?: SocialWhereInput | SocialWhereInput[]
    id?: StringFilter<"Social"> | string
    userId?: StringFilter<"Social"> | string
    websiteName?: StringFilter<"Social"> | string
    url?: StringFilter<"Social"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SocialOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    websiteName?: SortOrder
    url?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type SocialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialWhereInput | SocialWhereInput[]
    OR?: SocialWhereInput[]
    NOT?: SocialWhereInput | SocialWhereInput[]
    userId?: StringFilter<"Social"> | string
    websiteName?: StringFilter<"Social"> | string
    url?: StringFilter<"Social"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SocialOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    websiteName?: SortOrder
    url?: SortOrder
    _count?: SocialCountOrderByAggregateInput
    _max?: SocialMaxOrderByAggregateInput
    _min?: SocialMinOrderByAggregateInput
  }

  export type SocialScalarWhereWithAggregatesInput = {
    AND?: SocialScalarWhereWithAggregatesInput | SocialScalarWhereWithAggregatesInput[]
    OR?: SocialScalarWhereWithAggregatesInput[]
    NOT?: SocialScalarWhereWithAggregatesInput | SocialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Social"> | string
    userId?: StringWithAggregatesFilter<"Social"> | string
    websiteName?: StringWithAggregatesFilter<"Social"> | string
    url?: StringWithAggregatesFilter<"Social"> | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    userId?: StringFilter<"Education"> | string
    college?: StringFilter<"Education"> | string
    field?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    completed?: BoolNullableFilter<"Education"> | boolean | null
    expectedEndDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    GPA?: StringNullableFilter<"Education"> | string | null
    CGPA?: StringNullableFilter<"Education"> | string | null
    description?: StringNullableFilter<"Education"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    college?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    GPA?: SortOrderInput | SortOrder
    CGPA?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    userId?: StringFilter<"Education"> | string
    college?: StringFilter<"Education"> | string
    field?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    completed?: BoolNullableFilter<"Education"> | boolean | null
    expectedEndDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    GPA?: StringNullableFilter<"Education"> | string | null
    CGPA?: StringNullableFilter<"Education"> | string | null
    description?: StringNullableFilter<"Education"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    college?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    GPA?: SortOrderInput | SortOrder
    CGPA?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    userId?: StringWithAggregatesFilter<"Education"> | string
    college?: StringWithAggregatesFilter<"Education"> | string
    field?: StringWithAggregatesFilter<"Education"> | string
    startDate?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Education"> | Date | string | null
    completed?: BoolNullableWithAggregatesFilter<"Education"> | boolean | null
    expectedEndDate?: DateTimeNullableWithAggregatesFilter<"Education"> | Date | string | null
    GPA?: StringNullableWithAggregatesFilter<"Education"> | string | null
    CGPA?: StringNullableWithAggregatesFilter<"Education"> | string | null
    description?: StringNullableWithAggregatesFilter<"Education"> | string | null
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    userId?: StringFilter<"Skill"> | string
    title?: StringFilter<"Skill"> | string
    skills?: StringNullableListFilter<"Skill">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    skills?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    userId?: StringFilter<"Skill"> | string
    title?: StringFilter<"Skill"> | string
    skills?: StringNullableListFilter<"Skill">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    skills?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    userId?: StringWithAggregatesFilter<"Skill"> | string
    title?: StringWithAggregatesFilter<"Skill"> | string
    skills?: StringNullableListFilter<"Skill">
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: StringFilter<"Experience"> | string
    userId?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    role?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringNullableFilter<"Experience"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    company?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    userId?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    role?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringNullableFilter<"Experience"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    company?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Experience"> | string
    userId?: StringWithAggregatesFilter<"Experience"> | string
    company?: StringWithAggregatesFilter<"Experience"> | string
    role?: StringWithAggregatesFilter<"Experience"> | string
    startDate?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Experience"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"Experience"> | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    links?: ProjectLinkListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    links?: ProjectLinkOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    links?: ProjectLinkListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    startDate?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
  }

  export type ProjectLinkWhereInput = {
    AND?: ProjectLinkWhereInput | ProjectLinkWhereInput[]
    OR?: ProjectLinkWhereInput[]
    NOT?: ProjectLinkWhereInput | ProjectLinkWhereInput[]
    id?: StringFilter<"ProjectLink"> | string
    type?: EnumLinkTypeFilter<"ProjectLink"> | $Enums.LinkType
    projectId?: StringFilter<"ProjectLink"> | string
    Project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectLinkOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    Project?: ProjectOrderByWithRelationInput
  }

  export type ProjectLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectLinkWhereInput | ProjectLinkWhereInput[]
    OR?: ProjectLinkWhereInput[]
    NOT?: ProjectLinkWhereInput | ProjectLinkWhereInput[]
    type?: EnumLinkTypeFilter<"ProjectLink"> | $Enums.LinkType
    projectId?: StringFilter<"ProjectLink"> | string
    Project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectLinkOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    _count?: ProjectLinkCountOrderByAggregateInput
    _max?: ProjectLinkMaxOrderByAggregateInput
    _min?: ProjectLinkMinOrderByAggregateInput
  }

  export type ProjectLinkScalarWhereWithAggregatesInput = {
    AND?: ProjectLinkScalarWhereWithAggregatesInput | ProjectLinkScalarWhereWithAggregatesInput[]
    OR?: ProjectLinkScalarWhereWithAggregatesInput[]
    NOT?: ProjectLinkScalarWhereWithAggregatesInput | ProjectLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectLink"> | string
    type?: EnumLinkTypeWithAggregatesFilter<"ProjectLink"> | $Enums.LinkType
    projectId?: StringWithAggregatesFilter<"ProjectLink"> | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    generatedAt?: DateTimeFilter<"Resume"> | Date | string
    data?: StringFilter<"Resume"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    generatedAt?: SortOrder
    data?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    userId?: StringFilter<"Resume"> | string
    generatedAt?: DateTimeFilter<"Resume"> | Date | string
    data?: StringFilter<"Resume"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    generatedAt?: SortOrder
    data?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    userId?: StringWithAggregatesFilter<"Resume"> | string
    generatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    data?: StringWithAggregatesFilter<"Resume"> | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    location?: StringNullableFilter<"Job"> | string | null
    salary?: FloatNullableFilter<"Job"> | number | null
    hrId?: StringFilter<"Job"> | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    hr?: XOR<HRScalarRelationFilter, HRWhereInput>
    matched?: MatchedListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    hrId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hr?: HROrderByWithRelationInput
    matched?: MatchedOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    location?: StringNullableFilter<"Job"> | string | null
    salary?: FloatNullableFilter<"Job"> | number | null
    hrId?: StringFilter<"Job"> | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    hr?: XOR<HRScalarRelationFilter, HRWhereInput>
    matched?: MatchedListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    hrId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    title?: StringWithAggregatesFilter<"Job"> | string
    description?: StringWithAggregatesFilter<"Job"> | string
    location?: StringNullableWithAggregatesFilter<"Job"> | string | null
    salary?: FloatNullableWithAggregatesFilter<"Job"> | number | null
    hrId?: StringWithAggregatesFilter<"Job"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type HRWhereInput = {
    AND?: HRWhereInput | HRWhereInput[]
    OR?: HRWhereInput[]
    NOT?: HRWhereInput | HRWhereInput[]
    id?: StringFilter<"HR"> | string
    email?: StringFilter<"HR"> | string
    password?: StringFilter<"HR"> | string
    createdAt?: DateTimeFilter<"HR"> | Date | string
    updatedAt?: DateTimeFilter<"HR"> | Date | string
    jobs?: JobListRelationFilter
  }

  export type HROrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobs?: JobOrderByRelationAggregateInput
  }

  export type HRWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: HRWhereInput | HRWhereInput[]
    OR?: HRWhereInput[]
    NOT?: HRWhereInput | HRWhereInput[]
    password?: StringFilter<"HR"> | string
    createdAt?: DateTimeFilter<"HR"> | Date | string
    updatedAt?: DateTimeFilter<"HR"> | Date | string
    jobs?: JobListRelationFilter
  }, "id" | "email">

  export type HROrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HRCountOrderByAggregateInput
    _max?: HRMaxOrderByAggregateInput
    _min?: HRMinOrderByAggregateInput
  }

  export type HRScalarWhereWithAggregatesInput = {
    AND?: HRScalarWhereWithAggregatesInput | HRScalarWhereWithAggregatesInput[]
    OR?: HRScalarWhereWithAggregatesInput[]
    NOT?: HRScalarWhereWithAggregatesInput | HRScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HR"> | string
    email?: StringWithAggregatesFilter<"HR"> | string
    password?: StringWithAggregatesFilter<"HR"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HR"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HR"> | Date | string
  }

  export type MatchedWhereInput = {
    AND?: MatchedWhereInput | MatchedWhereInput[]
    OR?: MatchedWhereInput[]
    NOT?: MatchedWhereInput | MatchedWhereInput[]
    id?: StringFilter<"Matched"> | string
    jobId?: StringFilter<"Matched"> | string
    matchedAt?: DateTimeFilter<"Matched"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    userIds?: KvPairListRelationFilter
  }

  export type MatchedOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    matchedAt?: SortOrder
    job?: JobOrderByWithRelationInput
    userIds?: KvPairOrderByRelationAggregateInput
  }

  export type MatchedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchedWhereInput | MatchedWhereInput[]
    OR?: MatchedWhereInput[]
    NOT?: MatchedWhereInput | MatchedWhereInput[]
    jobId?: StringFilter<"Matched"> | string
    matchedAt?: DateTimeFilter<"Matched"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    userIds?: KvPairListRelationFilter
  }, "id">

  export type MatchedOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    matchedAt?: SortOrder
    _count?: MatchedCountOrderByAggregateInput
    _max?: MatchedMaxOrderByAggregateInput
    _min?: MatchedMinOrderByAggregateInput
  }

  export type MatchedScalarWhereWithAggregatesInput = {
    AND?: MatchedScalarWhereWithAggregatesInput | MatchedScalarWhereWithAggregatesInput[]
    OR?: MatchedScalarWhereWithAggregatesInput[]
    NOT?: MatchedScalarWhereWithAggregatesInput | MatchedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Matched"> | string
    jobId?: StringWithAggregatesFilter<"Matched"> | string
    matchedAt?: DateTimeWithAggregatesFilter<"Matched"> | Date | string
  }

  export type KvPairWhereInput = {
    AND?: KvPairWhereInput | KvPairWhereInput[]
    OR?: KvPairWhereInput[]
    NOT?: KvPairWhereInput | KvPairWhereInput[]
    id?: StringFilter<"KvPair"> | string
    userId?: StringFilter<"KvPair"> | string
    matchedPercentage?: FloatFilter<"KvPair"> | number
    matchedId?: StringFilter<"KvPair"> | string
    Matched?: XOR<MatchedScalarRelationFilter, MatchedWhereInput>
  }

  export type KvPairOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchedPercentage?: SortOrder
    matchedId?: SortOrder
    Matched?: MatchedOrderByWithRelationInput
  }

  export type KvPairWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KvPairWhereInput | KvPairWhereInput[]
    OR?: KvPairWhereInput[]
    NOT?: KvPairWhereInput | KvPairWhereInput[]
    userId?: StringFilter<"KvPair"> | string
    matchedPercentage?: FloatFilter<"KvPair"> | number
    matchedId?: StringFilter<"KvPair"> | string
    Matched?: XOR<MatchedScalarRelationFilter, MatchedWhereInput>
  }, "id">

  export type KvPairOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchedPercentage?: SortOrder
    matchedId?: SortOrder
    _count?: KvPairCountOrderByAggregateInput
    _avg?: KvPairAvgOrderByAggregateInput
    _max?: KvPairMaxOrderByAggregateInput
    _min?: KvPairMinOrderByAggregateInput
    _sum?: KvPairSumOrderByAggregateInput
  }

  export type KvPairScalarWhereWithAggregatesInput = {
    AND?: KvPairScalarWhereWithAggregatesInput | KvPairScalarWhereWithAggregatesInput[]
    OR?: KvPairScalarWhereWithAggregatesInput[]
    NOT?: KvPairScalarWhereWithAggregatesInput | KvPairScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KvPair"> | string
    userId?: StringWithAggregatesFilter<"KvPair"> | string
    matchedPercentage?: FloatWithAggregatesFilter<"KvPair"> | number
    matchedId?: StringWithAggregatesFilter<"KvPair"> | string
  }

  export type UserCreateInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    resume?: ResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    resume?: ResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocialCreateInput = {
    id?: string
    websiteName: string
    url: string
    User: UserCreateNestedOneWithoutSocialsInput
  }

  export type SocialUncheckedCreateInput = {
    id?: string
    userId: string
    websiteName: string
    url: string
  }

  export type SocialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutSocialsNestedInput
  }

  export type SocialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    websiteName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SocialCreateManyInput = {
    id?: string
    userId: string
    websiteName: string
    url: string
  }

  export type SocialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SocialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    websiteName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateInput = {
    id?: string
    college: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    completed?: boolean | null
    expectedEndDate?: Date | string | null
    GPA?: string | null
    CGPA?: string | null
    description?: string | null
    user: UserCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    userId: string
    college: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    completed?: boolean | null
    expectedEndDate?: Date | string | null
    GPA?: string | null
    CGPA?: string | null
    description?: string | null
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GPA?: NullableStringFieldUpdateOperationsInput | string | null
    CGPA?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GPA?: NullableStringFieldUpdateOperationsInput | string | null
    CGPA?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationCreateManyInput = {
    id?: string
    userId: string
    college: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    completed?: boolean | null
    expectedEndDate?: Date | string | null
    GPA?: string | null
    CGPA?: string | null
    description?: string | null
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GPA?: NullableStringFieldUpdateOperationsInput | string | null
    CGPA?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GPA?: NullableStringFieldUpdateOperationsInput | string | null
    CGPA?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillCreateInput = {
    id?: string
    title: string
    skills?: SkillCreateskillsInput | string[]
    user: UserCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    skills?: SkillCreateskillsInput | string[]
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateskillsInput | string[]
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateskillsInput | string[]
  }

  export type SkillCreateManyInput = {
    id?: string
    userId: string
    title: string
    skills?: SkillCreateskillsInput | string[]
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateskillsInput | string[]
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateskillsInput | string[]
  }

  export type ExperienceCreateInput = {
    id?: string
    company: string
    role: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    user: UserCreateNestedOneWithoutExperiencesInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: string
    userId: string
    company: string
    role: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
  }

  export type ExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutExperiencesNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceCreateManyInput = {
    id?: string
    userId: string
    company: string
    role: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
  }

  export type ExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    links?: ProjectLinkCreateNestedManyWithoutProjectInput
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    links?: ProjectLinkUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    links?: ProjectLinkUpdateManyWithoutProjectNestedInput
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    links?: ProjectLinkUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectLinkCreateInput = {
    id?: string
    type: $Enums.LinkType
    Project: ProjectCreateNestedOneWithoutLinksInput
  }

  export type ProjectLinkUncheckedCreateInput = {
    id?: string
    type: $Enums.LinkType
    projectId: string
  }

  export type ProjectLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    Project?: ProjectUpdateOneRequiredWithoutLinksNestedInput
  }

  export type ProjectLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectLinkCreateManyInput = {
    id?: string
    type: $Enums.LinkType
    projectId: string
  }

  export type ProjectLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
  }

  export type ProjectLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeCreateInput = {
    id?: string
    generatedAt?: Date | string
    data: string
    user: UserCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    userId: string
    generatedAt?: Date | string
    data: string
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeCreateManyInput = {
    id?: string
    userId: string
    generatedAt?: Date | string
    data: string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type JobCreateInput = {
    id?: string
    title: string
    description: string
    location?: string | null
    salary?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hr: HRCreateNestedOneWithoutJobsInput
    matched?: MatchedCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    location?: string | null
    salary?: number | null
    hrId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    matched?: MatchedUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hr?: HRUpdateOneRequiredWithoutJobsNestedInput
    matched?: MatchedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hrId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matched?: MatchedUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: string
    title: string
    description: string
    location?: string | null
    salary?: number | null
    hrId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hrId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HRCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobCreateNestedManyWithoutHrInput
  }

  export type HRUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutHrInput
  }

  export type HRUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutHrNestedInput
  }

  export type HRUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutHrNestedInput
  }

  export type HRCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HRUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HRUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchedCreateInput = {
    id?: string
    matchedAt?: Date | string
    job: JobCreateNestedOneWithoutMatchedInput
    userIds?: KvPairCreateNestedManyWithoutMatchedInput
  }

  export type MatchedUncheckedCreateInput = {
    id?: string
    jobId: string
    matchedAt?: Date | string
    userIds?: KvPairUncheckedCreateNestedManyWithoutMatchedInput
  }

  export type MatchedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutMatchedNestedInput
    userIds?: KvPairUpdateManyWithoutMatchedNestedInput
  }

  export type MatchedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userIds?: KvPairUncheckedUpdateManyWithoutMatchedNestedInput
  }

  export type MatchedCreateManyInput = {
    id?: string
    jobId: string
    matchedAt?: Date | string
  }

  export type MatchedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KvPairCreateInput = {
    id?: string
    userId: string
    matchedPercentage: number
    Matched: MatchedCreateNestedOneWithoutUserIdsInput
  }

  export type KvPairUncheckedCreateInput = {
    id?: string
    userId: string
    matchedPercentage: number
    matchedId: string
  }

  export type KvPairUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedPercentage?: FloatFieldUpdateOperationsInput | number
    Matched?: MatchedUpdateOneRequiredWithoutUserIdsNestedInput
  }

  export type KvPairUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedPercentage?: FloatFieldUpdateOperationsInput | number
    matchedId?: StringFieldUpdateOperationsInput | string
  }

  export type KvPairCreateManyInput = {
    id?: string
    userId: string
    matchedPercentage: number
    matchedId: string
  }

  export type KvPairUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type KvPairUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedPercentage?: FloatFieldUpdateOperationsInput | number
    matchedId?: StringFieldUpdateOperationsInput | string
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

  export type SocialListRelationFilter = {
    every?: SocialWhereInput
    some?: SocialWhereInput
    none?: SocialWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput
    some?: ResumeWhereInput
    none?: ResumeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SocialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    location?: SortOrder
    personalWebsite?: SortOrder
    githubProfile?: SortOrder
    githubId?: SortOrder
    githubAccessToken?: SortOrder
    latestRepo?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    location?: SortOrder
    personalWebsite?: SortOrder
    githubProfile?: SortOrder
    githubId?: SortOrder
    githubAccessToken?: SortOrder
    latestRepo?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    location?: SortOrder
    personalWebsite?: SortOrder
    githubProfile?: SortOrder
    githubId?: SortOrder
    githubAccessToken?: SortOrder
    latestRepo?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SocialCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    websiteName?: SortOrder
    url?: SortOrder
  }

  export type SocialMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    websiteName?: SortOrder
    url?: SortOrder
  }

  export type SocialMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    websiteName?: SortOrder
    url?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    college?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    completed?: SortOrder
    expectedEndDate?: SortOrder
    GPA?: SortOrder
    CGPA?: SortOrder
    description?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    college?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    completed?: SortOrder
    expectedEndDate?: SortOrder
    GPA?: SortOrder
    CGPA?: SortOrder
    description?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    college?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    completed?: SortOrder
    expectedEndDate?: SortOrder
    GPA?: SortOrder
    CGPA?: SortOrder
    description?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    skills?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    company?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    company?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    company?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
  }

  export type ProjectLinkListRelationFilter = {
    every?: ProjectLinkWhereInput
    some?: ProjectLinkWhereInput
    none?: ProjectLinkWhereInput
  }

  export type ProjectLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type EnumLinkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | EnumLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkTypeFilter<$PrismaModel> | $Enums.LinkType
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectLinkCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectLinkMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
  }

  export type EnumLinkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | EnumLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkTypeWithAggregatesFilter<$PrismaModel> | $Enums.LinkType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLinkTypeFilter<$PrismaModel>
    _max?: NestedEnumLinkTypeFilter<$PrismaModel>
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    generatedAt?: SortOrder
    data?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    generatedAt?: SortOrder
    data?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    generatedAt?: SortOrder
    data?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type HRScalarRelationFilter = {
    is?: HRWhereInput
    isNot?: HRWhereInput
  }

  export type MatchedListRelationFilter = {
    every?: MatchedWhereInput
    some?: MatchedWhereInput
    none?: MatchedWhereInput
  }

  export type MatchedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    hrId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    hrId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    hrId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HRCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HRMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HRMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type KvPairListRelationFilter = {
    every?: KvPairWhereInput
    some?: KvPairWhereInput
    none?: KvPairWhereInput
  }

  export type KvPairOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchedCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    matchedAt?: SortOrder
  }

  export type MatchedMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    matchedAt?: SortOrder
  }

  export type MatchedMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    matchedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MatchedScalarRelationFilter = {
    is?: MatchedWhereInput
    isNot?: MatchedWhereInput
  }

  export type KvPairCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchedPercentage?: SortOrder
    matchedId?: SortOrder
  }

  export type KvPairAvgOrderByAggregateInput = {
    matchedPercentage?: SortOrder
  }

  export type KvPairMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchedPercentage?: SortOrder
    matchedId?: SortOrder
  }

  export type KvPairMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchedPercentage?: SortOrder
    matchedId?: SortOrder
  }

  export type KvPairSumOrderByAggregateInput = {
    matchedPercentage?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SocialCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialCreateWithoutUserInput, SocialUncheckedCreateWithoutUserInput> | SocialCreateWithoutUserInput[] | SocialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialCreateOrConnectWithoutUserInput | SocialCreateOrConnectWithoutUserInput[]
    createMany?: SocialCreateManyUserInputEnvelope
    connect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutUserInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type SkillCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type SocialUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialCreateWithoutUserInput, SocialUncheckedCreateWithoutUserInput> | SocialCreateWithoutUserInput[] | SocialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialCreateOrConnectWithoutUserInput | SocialCreateOrConnectWithoutUserInput[]
    createMany?: SocialCreateManyUserInputEnvelope
    connect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SocialUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialCreateWithoutUserInput, SocialUncheckedCreateWithoutUserInput> | SocialCreateWithoutUserInput[] | SocialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialCreateOrConnectWithoutUserInput | SocialCreateOrConnectWithoutUserInput[]
    upsert?: SocialUpsertWithWhereUniqueWithoutUserInput | SocialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialCreateManyUserInputEnvelope
    set?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    disconnect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    delete?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    connect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    update?: SocialUpdateWithWhereUniqueWithoutUserInput | SocialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialUpdateManyWithWhereWithoutUserInput | SocialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialScalarWhereInput | SocialScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserInput | EducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserInput | EducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserInput | EducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type SkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutUserInput | SkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutUserInput | SkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutUserInput | SkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutUserInput | ExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutUserInput | ExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutUserInput | ExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type SocialUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialCreateWithoutUserInput, SocialUncheckedCreateWithoutUserInput> | SocialCreateWithoutUserInput[] | SocialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialCreateOrConnectWithoutUserInput | SocialCreateOrConnectWithoutUserInput[]
    upsert?: SocialUpsertWithWhereUniqueWithoutUserInput | SocialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialCreateManyUserInputEnvelope
    set?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    disconnect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    delete?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    connect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    update?: SocialUpdateWithWhereUniqueWithoutUserInput | SocialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialUpdateManyWithWhereWithoutUserInput | SocialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialScalarWhereInput | SocialScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserInput | EducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserInput | EducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserInput | EducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutUserInput | SkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutUserInput | SkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutUserInput | SkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutUserInput | ExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutUserInput | ExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutUserInput | ExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSocialsInput = {
    create?: XOR<UserCreateWithoutSocialsInput, UserUncheckedCreateWithoutSocialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSocialsNestedInput = {
    create?: XOR<UserCreateWithoutSocialsInput, UserUncheckedCreateWithoutSocialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialsInput
    upsert?: UserUpsertWithoutSocialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSocialsInput, UserUpdateWithoutSocialsInput>, UserUncheckedUpdateWithoutSocialsInput>
  }

  export type UserCreateNestedOneWithoutEducationInput = {
    create?: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationInput
    upsert?: UserUpsertWithoutEducationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEducationInput, UserUpdateWithoutEducationInput>, UserUncheckedUpdateWithoutEducationInput>
  }

  export type SkillCreateskillsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    upsert?: UserUpsertWithoutSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillsInput, UserUpdateWithoutSkillsInput>, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperiencesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperiencesInput
    upsert?: UserUpsertWithoutExperiencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExperiencesInput, UserUpdateWithoutExperiencesInput>, UserUncheckedUpdateWithoutExperiencesInput>
  }

  export type ProjectLinkCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput> | ProjectLinkCreateWithoutProjectInput[] | ProjectLinkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLinkCreateOrConnectWithoutProjectInput | ProjectLinkCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectLinkCreateManyProjectInputEnvelope
    connect?: ProjectLinkWhereUniqueInput | ProjectLinkWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectLinkUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput> | ProjectLinkCreateWithoutProjectInput[] | ProjectLinkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLinkCreateOrConnectWithoutProjectInput | ProjectLinkCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectLinkCreateManyProjectInputEnvelope
    connect?: ProjectLinkWhereUniqueInput | ProjectLinkWhereUniqueInput[]
  }

  export type ProjectLinkUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput> | ProjectLinkCreateWithoutProjectInput[] | ProjectLinkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLinkCreateOrConnectWithoutProjectInput | ProjectLinkCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectLinkUpsertWithWhereUniqueWithoutProjectInput | ProjectLinkUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectLinkCreateManyProjectInputEnvelope
    set?: ProjectLinkWhereUniqueInput | ProjectLinkWhereUniqueInput[]
    disconnect?: ProjectLinkWhereUniqueInput | ProjectLinkWhereUniqueInput[]
    delete?: ProjectLinkWhereUniqueInput | ProjectLinkWhereUniqueInput[]
    connect?: ProjectLinkWhereUniqueInput | ProjectLinkWhereUniqueInput[]
    update?: ProjectLinkUpdateWithWhereUniqueWithoutProjectInput | ProjectLinkUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectLinkUpdateManyWithWhereWithoutProjectInput | ProjectLinkUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectLinkScalarWhereInput | ProjectLinkScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectLinkUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput> | ProjectLinkCreateWithoutProjectInput[] | ProjectLinkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLinkCreateOrConnectWithoutProjectInput | ProjectLinkCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectLinkUpsertWithWhereUniqueWithoutProjectInput | ProjectLinkUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectLinkCreateManyProjectInputEnvelope
    set?: ProjectLinkWhereUniqueInput | ProjectLinkWhereUniqueInput[]
    disconnect?: ProjectLinkWhereUniqueInput | ProjectLinkWhereUniqueInput[]
    delete?: ProjectLinkWhereUniqueInput | ProjectLinkWhereUniqueInput[]
    connect?: ProjectLinkWhereUniqueInput | ProjectLinkWhereUniqueInput[]
    update?: ProjectLinkUpdateWithWhereUniqueWithoutProjectInput | ProjectLinkUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectLinkUpdateManyWithWhereWithoutProjectInput | ProjectLinkUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectLinkScalarWhereInput | ProjectLinkScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutLinksInput = {
    create?: XOR<ProjectCreateWithoutLinksInput, ProjectUncheckedCreateWithoutLinksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLinksInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumLinkTypeFieldUpdateOperationsInput = {
    set?: $Enums.LinkType
  }

  export type ProjectUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<ProjectCreateWithoutLinksInput, ProjectUncheckedCreateWithoutLinksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLinksInput
    upsert?: ProjectUpsertWithoutLinksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLinksInput, ProjectUpdateWithoutLinksInput>, ProjectUncheckedUpdateWithoutLinksInput>
  }

  export type UserCreateNestedOneWithoutResumeInput = {
    create?: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutResumeNestedInput = {
    create?: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeInput
    upsert?: UserUpsertWithoutResumeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumeInput, UserUpdateWithoutResumeInput>, UserUncheckedUpdateWithoutResumeInput>
  }

  export type HRCreateNestedOneWithoutJobsInput = {
    create?: XOR<HRCreateWithoutJobsInput, HRUncheckedCreateWithoutJobsInput>
    connectOrCreate?: HRCreateOrConnectWithoutJobsInput
    connect?: HRWhereUniqueInput
  }

  export type MatchedCreateNestedManyWithoutJobInput = {
    create?: XOR<MatchedCreateWithoutJobInput, MatchedUncheckedCreateWithoutJobInput> | MatchedCreateWithoutJobInput[] | MatchedUncheckedCreateWithoutJobInput[]
    connectOrCreate?: MatchedCreateOrConnectWithoutJobInput | MatchedCreateOrConnectWithoutJobInput[]
    createMany?: MatchedCreateManyJobInputEnvelope
    connect?: MatchedWhereUniqueInput | MatchedWhereUniqueInput[]
  }

  export type MatchedUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<MatchedCreateWithoutJobInput, MatchedUncheckedCreateWithoutJobInput> | MatchedCreateWithoutJobInput[] | MatchedUncheckedCreateWithoutJobInput[]
    connectOrCreate?: MatchedCreateOrConnectWithoutJobInput | MatchedCreateOrConnectWithoutJobInput[]
    createMany?: MatchedCreateManyJobInputEnvelope
    connect?: MatchedWhereUniqueInput | MatchedWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HRUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<HRCreateWithoutJobsInput, HRUncheckedCreateWithoutJobsInput>
    connectOrCreate?: HRCreateOrConnectWithoutJobsInput
    upsert?: HRUpsertWithoutJobsInput
    connect?: HRWhereUniqueInput
    update?: XOR<XOR<HRUpdateToOneWithWhereWithoutJobsInput, HRUpdateWithoutJobsInput>, HRUncheckedUpdateWithoutJobsInput>
  }

  export type MatchedUpdateManyWithoutJobNestedInput = {
    create?: XOR<MatchedCreateWithoutJobInput, MatchedUncheckedCreateWithoutJobInput> | MatchedCreateWithoutJobInput[] | MatchedUncheckedCreateWithoutJobInput[]
    connectOrCreate?: MatchedCreateOrConnectWithoutJobInput | MatchedCreateOrConnectWithoutJobInput[]
    upsert?: MatchedUpsertWithWhereUniqueWithoutJobInput | MatchedUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: MatchedCreateManyJobInputEnvelope
    set?: MatchedWhereUniqueInput | MatchedWhereUniqueInput[]
    disconnect?: MatchedWhereUniqueInput | MatchedWhereUniqueInput[]
    delete?: MatchedWhereUniqueInput | MatchedWhereUniqueInput[]
    connect?: MatchedWhereUniqueInput | MatchedWhereUniqueInput[]
    update?: MatchedUpdateWithWhereUniqueWithoutJobInput | MatchedUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: MatchedUpdateManyWithWhereWithoutJobInput | MatchedUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: MatchedScalarWhereInput | MatchedScalarWhereInput[]
  }

  export type MatchedUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<MatchedCreateWithoutJobInput, MatchedUncheckedCreateWithoutJobInput> | MatchedCreateWithoutJobInput[] | MatchedUncheckedCreateWithoutJobInput[]
    connectOrCreate?: MatchedCreateOrConnectWithoutJobInput | MatchedCreateOrConnectWithoutJobInput[]
    upsert?: MatchedUpsertWithWhereUniqueWithoutJobInput | MatchedUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: MatchedCreateManyJobInputEnvelope
    set?: MatchedWhereUniqueInput | MatchedWhereUniqueInput[]
    disconnect?: MatchedWhereUniqueInput | MatchedWhereUniqueInput[]
    delete?: MatchedWhereUniqueInput | MatchedWhereUniqueInput[]
    connect?: MatchedWhereUniqueInput | MatchedWhereUniqueInput[]
    update?: MatchedUpdateWithWhereUniqueWithoutJobInput | MatchedUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: MatchedUpdateManyWithWhereWithoutJobInput | MatchedUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: MatchedScalarWhereInput | MatchedScalarWhereInput[]
  }

  export type JobCreateNestedManyWithoutHrInput = {
    create?: XOR<JobCreateWithoutHrInput, JobUncheckedCreateWithoutHrInput> | JobCreateWithoutHrInput[] | JobUncheckedCreateWithoutHrInput[]
    connectOrCreate?: JobCreateOrConnectWithoutHrInput | JobCreateOrConnectWithoutHrInput[]
    createMany?: JobCreateManyHrInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutHrInput = {
    create?: XOR<JobCreateWithoutHrInput, JobUncheckedCreateWithoutHrInput> | JobCreateWithoutHrInput[] | JobUncheckedCreateWithoutHrInput[]
    connectOrCreate?: JobCreateOrConnectWithoutHrInput | JobCreateOrConnectWithoutHrInput[]
    createMany?: JobCreateManyHrInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUpdateManyWithoutHrNestedInput = {
    create?: XOR<JobCreateWithoutHrInput, JobUncheckedCreateWithoutHrInput> | JobCreateWithoutHrInput[] | JobUncheckedCreateWithoutHrInput[]
    connectOrCreate?: JobCreateOrConnectWithoutHrInput | JobCreateOrConnectWithoutHrInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutHrInput | JobUpsertWithWhereUniqueWithoutHrInput[]
    createMany?: JobCreateManyHrInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutHrInput | JobUpdateWithWhereUniqueWithoutHrInput[]
    updateMany?: JobUpdateManyWithWhereWithoutHrInput | JobUpdateManyWithWhereWithoutHrInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutHrNestedInput = {
    create?: XOR<JobCreateWithoutHrInput, JobUncheckedCreateWithoutHrInput> | JobCreateWithoutHrInput[] | JobUncheckedCreateWithoutHrInput[]
    connectOrCreate?: JobCreateOrConnectWithoutHrInput | JobCreateOrConnectWithoutHrInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutHrInput | JobUpsertWithWhereUniqueWithoutHrInput[]
    createMany?: JobCreateManyHrInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutHrInput | JobUpdateWithWhereUniqueWithoutHrInput[]
    updateMany?: JobUpdateManyWithWhereWithoutHrInput | JobUpdateManyWithWhereWithoutHrInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutMatchedInput = {
    create?: XOR<JobCreateWithoutMatchedInput, JobUncheckedCreateWithoutMatchedInput>
    connectOrCreate?: JobCreateOrConnectWithoutMatchedInput
    connect?: JobWhereUniqueInput
  }

  export type KvPairCreateNestedManyWithoutMatchedInput = {
    create?: XOR<KvPairCreateWithoutMatchedInput, KvPairUncheckedCreateWithoutMatchedInput> | KvPairCreateWithoutMatchedInput[] | KvPairUncheckedCreateWithoutMatchedInput[]
    connectOrCreate?: KvPairCreateOrConnectWithoutMatchedInput | KvPairCreateOrConnectWithoutMatchedInput[]
    createMany?: KvPairCreateManyMatchedInputEnvelope
    connect?: KvPairWhereUniqueInput | KvPairWhereUniqueInput[]
  }

  export type KvPairUncheckedCreateNestedManyWithoutMatchedInput = {
    create?: XOR<KvPairCreateWithoutMatchedInput, KvPairUncheckedCreateWithoutMatchedInput> | KvPairCreateWithoutMatchedInput[] | KvPairUncheckedCreateWithoutMatchedInput[]
    connectOrCreate?: KvPairCreateOrConnectWithoutMatchedInput | KvPairCreateOrConnectWithoutMatchedInput[]
    createMany?: KvPairCreateManyMatchedInputEnvelope
    connect?: KvPairWhereUniqueInput | KvPairWhereUniqueInput[]
  }

  export type JobUpdateOneRequiredWithoutMatchedNestedInput = {
    create?: XOR<JobCreateWithoutMatchedInput, JobUncheckedCreateWithoutMatchedInput>
    connectOrCreate?: JobCreateOrConnectWithoutMatchedInput
    upsert?: JobUpsertWithoutMatchedInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutMatchedInput, JobUpdateWithoutMatchedInput>, JobUncheckedUpdateWithoutMatchedInput>
  }

  export type KvPairUpdateManyWithoutMatchedNestedInput = {
    create?: XOR<KvPairCreateWithoutMatchedInput, KvPairUncheckedCreateWithoutMatchedInput> | KvPairCreateWithoutMatchedInput[] | KvPairUncheckedCreateWithoutMatchedInput[]
    connectOrCreate?: KvPairCreateOrConnectWithoutMatchedInput | KvPairCreateOrConnectWithoutMatchedInput[]
    upsert?: KvPairUpsertWithWhereUniqueWithoutMatchedInput | KvPairUpsertWithWhereUniqueWithoutMatchedInput[]
    createMany?: KvPairCreateManyMatchedInputEnvelope
    set?: KvPairWhereUniqueInput | KvPairWhereUniqueInput[]
    disconnect?: KvPairWhereUniqueInput | KvPairWhereUniqueInput[]
    delete?: KvPairWhereUniqueInput | KvPairWhereUniqueInput[]
    connect?: KvPairWhereUniqueInput | KvPairWhereUniqueInput[]
    update?: KvPairUpdateWithWhereUniqueWithoutMatchedInput | KvPairUpdateWithWhereUniqueWithoutMatchedInput[]
    updateMany?: KvPairUpdateManyWithWhereWithoutMatchedInput | KvPairUpdateManyWithWhereWithoutMatchedInput[]
    deleteMany?: KvPairScalarWhereInput | KvPairScalarWhereInput[]
  }

  export type KvPairUncheckedUpdateManyWithoutMatchedNestedInput = {
    create?: XOR<KvPairCreateWithoutMatchedInput, KvPairUncheckedCreateWithoutMatchedInput> | KvPairCreateWithoutMatchedInput[] | KvPairUncheckedCreateWithoutMatchedInput[]
    connectOrCreate?: KvPairCreateOrConnectWithoutMatchedInput | KvPairCreateOrConnectWithoutMatchedInput[]
    upsert?: KvPairUpsertWithWhereUniqueWithoutMatchedInput | KvPairUpsertWithWhereUniqueWithoutMatchedInput[]
    createMany?: KvPairCreateManyMatchedInputEnvelope
    set?: KvPairWhereUniqueInput | KvPairWhereUniqueInput[]
    disconnect?: KvPairWhereUniqueInput | KvPairWhereUniqueInput[]
    delete?: KvPairWhereUniqueInput | KvPairWhereUniqueInput[]
    connect?: KvPairWhereUniqueInput | KvPairWhereUniqueInput[]
    update?: KvPairUpdateWithWhereUniqueWithoutMatchedInput | KvPairUpdateWithWhereUniqueWithoutMatchedInput[]
    updateMany?: KvPairUpdateManyWithWhereWithoutMatchedInput | KvPairUpdateManyWithWhereWithoutMatchedInput[]
    deleteMany?: KvPairScalarWhereInput | KvPairScalarWhereInput[]
  }

  export type MatchedCreateNestedOneWithoutUserIdsInput = {
    create?: XOR<MatchedCreateWithoutUserIdsInput, MatchedUncheckedCreateWithoutUserIdsInput>
    connectOrCreate?: MatchedCreateOrConnectWithoutUserIdsInput
    connect?: MatchedWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MatchedUpdateOneRequiredWithoutUserIdsNestedInput = {
    create?: XOR<MatchedCreateWithoutUserIdsInput, MatchedUncheckedCreateWithoutUserIdsInput>
    connectOrCreate?: MatchedCreateOrConnectWithoutUserIdsInput
    upsert?: MatchedUpsertWithoutUserIdsInput
    connect?: MatchedWhereUniqueInput
    update?: XOR<XOR<MatchedUpdateToOneWithWhereWithoutUserIdsInput, MatchedUpdateWithoutUserIdsInput>, MatchedUncheckedUpdateWithoutUserIdsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumLinkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | EnumLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkTypeFilter<$PrismaModel> | $Enums.LinkType
  }

  export type NestedEnumLinkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | EnumLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkTypeWithAggregatesFilter<$PrismaModel> | $Enums.LinkType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLinkTypeFilter<$PrismaModel>
    _max?: NestedEnumLinkTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SocialCreateWithoutUserInput = {
    id?: string
    websiteName: string
    url: string
  }

  export type SocialUncheckedCreateWithoutUserInput = {
    id?: string
    websiteName: string
    url: string
  }

  export type SocialCreateOrConnectWithoutUserInput = {
    where: SocialWhereUniqueInput
    create: XOR<SocialCreateWithoutUserInput, SocialUncheckedCreateWithoutUserInput>
  }

  export type SocialCreateManyUserInputEnvelope = {
    data: SocialCreateManyUserInput | SocialCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EducationCreateWithoutUserInput = {
    id?: string
    college: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    completed?: boolean | null
    expectedEndDate?: Date | string | null
    GPA?: string | null
    CGPA?: string | null
    description?: string | null
  }

  export type EducationUncheckedCreateWithoutUserInput = {
    id?: string
    college: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    completed?: boolean | null
    expectedEndDate?: Date | string | null
    GPA?: string | null
    CGPA?: string | null
    description?: string | null
  }

  export type EducationCreateOrConnectWithoutUserInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationCreateManyUserInputEnvelope = {
    data: EducationCreateManyUserInput | EducationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SkillCreateWithoutUserInput = {
    id?: string
    title: string
    skills?: SkillCreateskillsInput | string[]
  }

  export type SkillUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    skills?: SkillCreateskillsInput | string[]
  }

  export type SkillCreateOrConnectWithoutUserInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type SkillCreateManyUserInputEnvelope = {
    data: SkillCreateManyUserInput | SkillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExperienceCreateWithoutUserInput = {
    id?: string
    company: string
    role: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
  }

  export type ExperienceUncheckedCreateWithoutUserInput = {
    id?: string
    company: string
    role: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
  }

  export type ExperienceCreateOrConnectWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceCreateManyUserInputEnvelope = {
    data: ExperienceCreateManyUserInput | ExperienceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    links?: ProjectLinkCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    links?: ProjectLinkUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResumeCreateWithoutUserInput = {
    id?: string
    generatedAt?: Date | string
    data: string
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string
    generatedAt?: Date | string
    data: string
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeCreateManyUserInputEnvelope = {
    data: ResumeCreateManyUserInput | ResumeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SocialUpsertWithWhereUniqueWithoutUserInput = {
    where: SocialWhereUniqueInput
    update: XOR<SocialUpdateWithoutUserInput, SocialUncheckedUpdateWithoutUserInput>
    create: XOR<SocialCreateWithoutUserInput, SocialUncheckedCreateWithoutUserInput>
  }

  export type SocialUpdateWithWhereUniqueWithoutUserInput = {
    where: SocialWhereUniqueInput
    data: XOR<SocialUpdateWithoutUserInput, SocialUncheckedUpdateWithoutUserInput>
  }

  export type SocialUpdateManyWithWhereWithoutUserInput = {
    where: SocialScalarWhereInput
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyWithoutUserInput>
  }

  export type SocialScalarWhereInput = {
    AND?: SocialScalarWhereInput | SocialScalarWhereInput[]
    OR?: SocialScalarWhereInput[]
    NOT?: SocialScalarWhereInput | SocialScalarWhereInput[]
    id?: StringFilter<"Social"> | string
    userId?: StringFilter<"Social"> | string
    websiteName?: StringFilter<"Social"> | string
    url?: StringFilter<"Social"> | string
  }

  export type EducationUpsertWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
  }

  export type EducationUpdateManyWithWhereWithoutUserInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutUserInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    userId?: StringFilter<"Education"> | string
    college?: StringFilter<"Education"> | string
    field?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    completed?: BoolNullableFilter<"Education"> | boolean | null
    expectedEndDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    GPA?: StringNullableFilter<"Education"> | string | null
    CGPA?: StringNullableFilter<"Education"> | string | null
    description?: StringNullableFilter<"Education"> | string | null
  }

  export type SkillUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
  }

  export type SkillUpdateManyWithWhereWithoutUserInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutUserInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    userId?: StringFilter<"Skill"> | string
    title?: StringFilter<"Skill"> | string
    skills?: StringNullableListFilter<"Skill">
  }

  export type ExperienceUpsertWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutUserInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutUserInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: StringFilter<"Experience"> | string
    userId?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    role?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringNullableFilter<"Experience"> | string | null
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
  }

  export type ResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateManyWithWhereWithoutUserInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeScalarWhereInput = {
    AND?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    OR?: ResumeScalarWhereInput[]
    NOT?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    id?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    generatedAt?: DateTimeFilter<"Resume"> | Date | string
    data?: StringFilter<"Resume"> | string
  }

  export type UserCreateWithoutSocialsInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    education?: EducationCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    resume?: ResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSocialsInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSocialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSocialsInput, UserUncheckedCreateWithoutSocialsInput>
  }

  export type UserUpsertWithoutSocialsInput = {
    update: XOR<UserUpdateWithoutSocialsInput, UserUncheckedUpdateWithoutSocialsInput>
    create: XOR<UserCreateWithoutSocialsInput, UserUncheckedCreateWithoutSocialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSocialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSocialsInput, UserUncheckedUpdateWithoutSocialsInput>
  }

  export type UserUpdateWithoutSocialsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    education?: EducationUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    resume?: ResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSocialsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEducationInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    resume?: ResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEducationInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEducationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
  }

  export type UserUpsertWithoutEducationInput = {
    update: XOR<UserUpdateWithoutEducationInput, UserUncheckedUpdateWithoutEducationInput>
    create: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEducationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEducationInput, UserUncheckedUpdateWithoutEducationInput>
  }

  export type UserUpdateWithoutEducationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    resume?: ResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEducationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSkillsInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    resume?: ResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type UserUpsertWithoutSkillsInput = {
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserUpdateWithoutSkillsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    resume?: ResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutExperiencesInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    resume?: ResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExperiencesInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExperiencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
  }

  export type UserUpsertWithoutExperiencesInput = {
    update: XOR<UserUpdateWithoutExperiencesInput, UserUncheckedUpdateWithoutExperiencesInput>
    create: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExperiencesInput, UserUncheckedUpdateWithoutExperiencesInput>
  }

  export type UserUpdateWithoutExperiencesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    resume?: ResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExperiencesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectLinkCreateWithoutProjectInput = {
    id?: string
    type: $Enums.LinkType
  }

  export type ProjectLinkUncheckedCreateWithoutProjectInput = {
    id?: string
    type: $Enums.LinkType
  }

  export type ProjectLinkCreateOrConnectWithoutProjectInput = {
    where: ProjectLinkWhereUniqueInput
    create: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput>
  }

  export type ProjectLinkCreateManyProjectInputEnvelope = {
    data: ProjectLinkCreateManyProjectInput | ProjectLinkCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProjectsInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    resume?: ResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectLinkUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectLinkWhereUniqueInput
    update: XOR<ProjectLinkUpdateWithoutProjectInput, ProjectLinkUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput>
  }

  export type ProjectLinkUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectLinkWhereUniqueInput
    data: XOR<ProjectLinkUpdateWithoutProjectInput, ProjectLinkUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectLinkUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectLinkScalarWhereInput
    data: XOR<ProjectLinkUpdateManyMutationInput, ProjectLinkUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectLinkScalarWhereInput = {
    AND?: ProjectLinkScalarWhereInput | ProjectLinkScalarWhereInput[]
    OR?: ProjectLinkScalarWhereInput[]
    NOT?: ProjectLinkScalarWhereInput | ProjectLinkScalarWhereInput[]
    id?: StringFilter<"ProjectLink"> | string
    type?: EnumLinkTypeFilter<"ProjectLink"> | $Enums.LinkType
    projectId?: StringFilter<"ProjectLink"> | string
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    resume?: ResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutLinksInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutLinksInput = {
    id?: string
    userId: string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type ProjectCreateOrConnectWithoutLinksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLinksInput, ProjectUncheckedCreateWithoutLinksInput>
  }

  export type ProjectUpsertWithoutLinksInput = {
    update: XOR<ProjectUpdateWithoutLinksInput, ProjectUncheckedUpdateWithoutLinksInput>
    create: XOR<ProjectCreateWithoutLinksInput, ProjectUncheckedCreateWithoutLinksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLinksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLinksInput, ProjectUncheckedUpdateWithoutLinksInput>
  }

  export type ProjectUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutResumeInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumeInput = {
    userId?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    contact?: string | null
    location?: string | null
    personalWebsite?: string | null
    githubProfile: string
    githubId?: string | null
    githubAccessToken?: string | null
    latestRepo?: string | null
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
  }

  export type UserUpsertWithoutResumeInput = {
    update: XOR<UserUpdateWithoutResumeInput, UserUncheckedUpdateWithoutResumeInput>
    create: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumeInput, UserUncheckedUpdateWithoutResumeInput>
  }

  export type UserUpdateWithoutResumeInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumeInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    githubProfile?: StringFieldUpdateOperationsInput | string
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    latestRepo?: NullableStringFieldUpdateOperationsInput | string | null
    socials?: SocialUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HRCreateWithoutJobsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HRUncheckedCreateWithoutJobsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HRCreateOrConnectWithoutJobsInput = {
    where: HRWhereUniqueInput
    create: XOR<HRCreateWithoutJobsInput, HRUncheckedCreateWithoutJobsInput>
  }

  export type MatchedCreateWithoutJobInput = {
    id?: string
    matchedAt?: Date | string
    userIds?: KvPairCreateNestedManyWithoutMatchedInput
  }

  export type MatchedUncheckedCreateWithoutJobInput = {
    id?: string
    matchedAt?: Date | string
    userIds?: KvPairUncheckedCreateNestedManyWithoutMatchedInput
  }

  export type MatchedCreateOrConnectWithoutJobInput = {
    where: MatchedWhereUniqueInput
    create: XOR<MatchedCreateWithoutJobInput, MatchedUncheckedCreateWithoutJobInput>
  }

  export type MatchedCreateManyJobInputEnvelope = {
    data: MatchedCreateManyJobInput | MatchedCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type HRUpsertWithoutJobsInput = {
    update: XOR<HRUpdateWithoutJobsInput, HRUncheckedUpdateWithoutJobsInput>
    create: XOR<HRCreateWithoutJobsInput, HRUncheckedCreateWithoutJobsInput>
    where?: HRWhereInput
  }

  export type HRUpdateToOneWithWhereWithoutJobsInput = {
    where?: HRWhereInput
    data: XOR<HRUpdateWithoutJobsInput, HRUncheckedUpdateWithoutJobsInput>
  }

  export type HRUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HRUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchedUpsertWithWhereUniqueWithoutJobInput = {
    where: MatchedWhereUniqueInput
    update: XOR<MatchedUpdateWithoutJobInput, MatchedUncheckedUpdateWithoutJobInput>
    create: XOR<MatchedCreateWithoutJobInput, MatchedUncheckedCreateWithoutJobInput>
  }

  export type MatchedUpdateWithWhereUniqueWithoutJobInput = {
    where: MatchedWhereUniqueInput
    data: XOR<MatchedUpdateWithoutJobInput, MatchedUncheckedUpdateWithoutJobInput>
  }

  export type MatchedUpdateManyWithWhereWithoutJobInput = {
    where: MatchedScalarWhereInput
    data: XOR<MatchedUpdateManyMutationInput, MatchedUncheckedUpdateManyWithoutJobInput>
  }

  export type MatchedScalarWhereInput = {
    AND?: MatchedScalarWhereInput | MatchedScalarWhereInput[]
    OR?: MatchedScalarWhereInput[]
    NOT?: MatchedScalarWhereInput | MatchedScalarWhereInput[]
    id?: StringFilter<"Matched"> | string
    jobId?: StringFilter<"Matched"> | string
    matchedAt?: DateTimeFilter<"Matched"> | Date | string
  }

  export type JobCreateWithoutHrInput = {
    id?: string
    title: string
    description: string
    location?: string | null
    salary?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matched?: MatchedCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutHrInput = {
    id?: string
    title: string
    description: string
    location?: string | null
    salary?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matched?: MatchedUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutHrInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutHrInput, JobUncheckedCreateWithoutHrInput>
  }

  export type JobCreateManyHrInputEnvelope = {
    data: JobCreateManyHrInput | JobCreateManyHrInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithWhereUniqueWithoutHrInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutHrInput, JobUncheckedUpdateWithoutHrInput>
    create: XOR<JobCreateWithoutHrInput, JobUncheckedCreateWithoutHrInput>
  }

  export type JobUpdateWithWhereUniqueWithoutHrInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutHrInput, JobUncheckedUpdateWithoutHrInput>
  }

  export type JobUpdateManyWithWhereWithoutHrInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutHrInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    location?: StringNullableFilter<"Job"> | string | null
    salary?: FloatNullableFilter<"Job"> | number | null
    hrId?: StringFilter<"Job"> | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type JobCreateWithoutMatchedInput = {
    id?: string
    title: string
    description: string
    location?: string | null
    salary?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hr: HRCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateWithoutMatchedInput = {
    id?: string
    title: string
    description: string
    location?: string | null
    salary?: number | null
    hrId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCreateOrConnectWithoutMatchedInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutMatchedInput, JobUncheckedCreateWithoutMatchedInput>
  }

  export type KvPairCreateWithoutMatchedInput = {
    id?: string
    userId: string
    matchedPercentage: number
  }

  export type KvPairUncheckedCreateWithoutMatchedInput = {
    id?: string
    userId: string
    matchedPercentage: number
  }

  export type KvPairCreateOrConnectWithoutMatchedInput = {
    where: KvPairWhereUniqueInput
    create: XOR<KvPairCreateWithoutMatchedInput, KvPairUncheckedCreateWithoutMatchedInput>
  }

  export type KvPairCreateManyMatchedInputEnvelope = {
    data: KvPairCreateManyMatchedInput | KvPairCreateManyMatchedInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithoutMatchedInput = {
    update: XOR<JobUpdateWithoutMatchedInput, JobUncheckedUpdateWithoutMatchedInput>
    create: XOR<JobCreateWithoutMatchedInput, JobUncheckedCreateWithoutMatchedInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutMatchedInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutMatchedInput, JobUncheckedUpdateWithoutMatchedInput>
  }

  export type JobUpdateWithoutMatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hr?: HRUpdateOneRequiredWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutMatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hrId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KvPairUpsertWithWhereUniqueWithoutMatchedInput = {
    where: KvPairWhereUniqueInput
    update: XOR<KvPairUpdateWithoutMatchedInput, KvPairUncheckedUpdateWithoutMatchedInput>
    create: XOR<KvPairCreateWithoutMatchedInput, KvPairUncheckedCreateWithoutMatchedInput>
  }

  export type KvPairUpdateWithWhereUniqueWithoutMatchedInput = {
    where: KvPairWhereUniqueInput
    data: XOR<KvPairUpdateWithoutMatchedInput, KvPairUncheckedUpdateWithoutMatchedInput>
  }

  export type KvPairUpdateManyWithWhereWithoutMatchedInput = {
    where: KvPairScalarWhereInput
    data: XOR<KvPairUpdateManyMutationInput, KvPairUncheckedUpdateManyWithoutMatchedInput>
  }

  export type KvPairScalarWhereInput = {
    AND?: KvPairScalarWhereInput | KvPairScalarWhereInput[]
    OR?: KvPairScalarWhereInput[]
    NOT?: KvPairScalarWhereInput | KvPairScalarWhereInput[]
    id?: StringFilter<"KvPair"> | string
    userId?: StringFilter<"KvPair"> | string
    matchedPercentage?: FloatFilter<"KvPair"> | number
    matchedId?: StringFilter<"KvPair"> | string
  }

  export type MatchedCreateWithoutUserIdsInput = {
    id?: string
    matchedAt?: Date | string
    job: JobCreateNestedOneWithoutMatchedInput
  }

  export type MatchedUncheckedCreateWithoutUserIdsInput = {
    id?: string
    jobId: string
    matchedAt?: Date | string
  }

  export type MatchedCreateOrConnectWithoutUserIdsInput = {
    where: MatchedWhereUniqueInput
    create: XOR<MatchedCreateWithoutUserIdsInput, MatchedUncheckedCreateWithoutUserIdsInput>
  }

  export type MatchedUpsertWithoutUserIdsInput = {
    update: XOR<MatchedUpdateWithoutUserIdsInput, MatchedUncheckedUpdateWithoutUserIdsInput>
    create: XOR<MatchedCreateWithoutUserIdsInput, MatchedUncheckedCreateWithoutUserIdsInput>
    where?: MatchedWhereInput
  }

  export type MatchedUpdateToOneWithWhereWithoutUserIdsInput = {
    where?: MatchedWhereInput
    data: XOR<MatchedUpdateWithoutUserIdsInput, MatchedUncheckedUpdateWithoutUserIdsInput>
  }

  export type MatchedUpdateWithoutUserIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutMatchedNestedInput
  }

  export type MatchedUncheckedUpdateWithoutUserIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialCreateManyUserInput = {
    id?: string
    websiteName: string
    url: string
  }

  export type EducationCreateManyUserInput = {
    id?: string
    college: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    completed?: boolean | null
    expectedEndDate?: Date | string | null
    GPA?: string | null
    CGPA?: string | null
    description?: string | null
  }

  export type SkillCreateManyUserInput = {
    id?: string
    title: string
    skills?: SkillCreateskillsInput | string[]
  }

  export type ExperienceCreateManyUserInput = {
    id?: string
    company: string
    role: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type ResumeCreateManyUserInput = {
    id?: string
    generatedAt?: Date | string
    data: string
  }

  export type SocialUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SocialUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SocialUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GPA?: NullableStringFieldUpdateOperationsInput | string | null
    CGPA?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GPA?: NullableStringFieldUpdateOperationsInput | string | null
    CGPA?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GPA?: NullableStringFieldUpdateOperationsInput | string | null
    CGPA?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateskillsInput | string[]
  }

  export type SkillUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateskillsInput | string[]
  }

  export type SkillUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateskillsInput | string[]
  }

  export type ExperienceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    links?: ProjectLinkUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    links?: ProjectLinkUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectLinkCreateManyProjectInput = {
    id?: string
    type: $Enums.LinkType
  }

  export type ProjectLinkUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
  }

  export type ProjectLinkUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
  }

  export type ProjectLinkUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
  }

  export type MatchedCreateManyJobInput = {
    id?: string
    matchedAt?: Date | string
  }

  export type MatchedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userIds?: KvPairUpdateManyWithoutMatchedNestedInput
  }

  export type MatchedUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userIds?: KvPairUncheckedUpdateManyWithoutMatchedNestedInput
  }

  export type MatchedUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateManyHrInput = {
    id?: string
    title: string
    description: string
    location?: string | null
    salary?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateWithoutHrInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matched?: MatchedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutHrInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matched?: MatchedUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutHrInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KvPairCreateManyMatchedInput = {
    id?: string
    userId: string
    matchedPercentage: number
  }

  export type KvPairUpdateWithoutMatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type KvPairUncheckedUpdateWithoutMatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type KvPairUncheckedUpdateManyWithoutMatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedPercentage?: FloatFieldUpdateOperationsInput | number
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