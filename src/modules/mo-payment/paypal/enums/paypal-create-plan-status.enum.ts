export enum PaypalCreatePlanStatusEnum {
    CREATED = 'CREATED', //. The plan was created. You cannot create subscriptions for a plan in this state.
    INACTIVE = 'INACTIVE', //The plan is inactive.
    ACTIVE = 'ACTIVE' // The plan is active. You can only create subscriptions for a plan in this state.
}
