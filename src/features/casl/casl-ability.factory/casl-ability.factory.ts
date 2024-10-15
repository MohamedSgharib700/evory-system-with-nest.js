// import { Subject } from "rxjs";
// import { App } from "src/features/apps/entities/app.entity";
// import { Employee } from "src/features/employees/entities/employee.entity";

// type Subjects = InferSubjects<typeof App | typeof Employee;> | 'all';

// export type AppAbility = Ability<[Action, Subjects]>;

// @Injectable()
// export class CaslAbilityFactory {
//   createForUser(employee: Employee) {
//     const { can, cannot, build } = new AbilityBuilder<
//       Ability<[Action, Subjects]>
//     >(Ability as AbilityClass<AppAbility>);

//     if (employee.isAdmin) {
//       can(Action.Manage, 'all'); // read-write access to everything
//     } else {
//       can(Action.Read, 'all'); // read-only access to everything
//     }

//     can(Action.Update, App, { authorId: employee.id });
//     cannot(Action.Delete, App, { isPublished: true });

//     return build({
//       // Read https://casl.js.org/v6/en/guide/subject-type-detection#use-classes-as-subject-types for details
//       detectSubjectType: (item) =>
//         item.constructor as ExtractSubjectType<Subjects>,
//     });
//   }
// }