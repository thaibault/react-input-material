import type { EventMapperWrapperReference, TextAreaProperties, TextAreaReference } from '../../../implementations/type';
export type Reference = EventMapperWrapperReference<Partial<TextAreaReference>>;
export declare const Index: import("react").ForwardRefExoticComponent<Omit<TextAreaProperties, "ref"> & import("react").RefAttributes<Reference>>;
export default Index;
