import type { Mapping } from 'clientnode';
import type { ReactNode } from 'react';
import type { DateTimeRepresentation } from './components/Interval/type';
import type { DefaultProperties as TextInputDefaultProperties, DataTransformation as TextInputDataTransformation, Props as TextInputProps } from './components/TextInput/type';
import type { BaseProperties, BaseProps, DefaultBaseProperties, DefaultProperties, ModelState, NormalizedSelection, Properties, SelectionDefinition, ValueState } from './type';
import { Logger } from 'clientnode';
import { NullSymbol, UndefinedSymbol } from 'clientnode/property-types';
import { useState } from 'react';
export declare const log: Logger;
/**
 * Removes all none serializable values from given data structure.
 * @param object - Mapping of values to slice.
 */
export declare const slicePropertiesForState: (object: Mapping) => void;
/**
 * Removes all none serializable values from given data structure recursively.
 * @param properties - Mapping of values to slice.
 * @returns Nothing.
 */
export declare const slicePropertiesForStateRecursively: (properties: unknown) => object | undefined;
/**
 * Creates a mocked a state setter. Useful to dynamically convert a component
 * from uncontrolled to controlled one.
 * @param value - Parameter for state setter.
 * @returns Resulting value of the "useState" hook.
 */
export declare const createDummyStateSetter: <Type = unknown>(value: Type) => ReturnType<typeof useState>[1];
/**
 * Consolidates properties not found in properties but in state into
 * properties.
 * @param properties - To consolidate.
 * @param state - To search values in.
 * @returns Consolidated properties.
 */
export declare const deriveMissingPropertiesFromState: <Properties extends BaseProps = BaseProps, State extends ValueState = ValueState>(properties: Properties, state: State) => Properties;
/**
 * Creates a hybrid a state setter which only triggers when model state changes
 * occur. Useful to dynamically convert a component from uncontrolled to
 * controlled while model state should be uncontrolled either.
 * @param setValueState - Value setter to wrap.
 * @param currentValueState - Last known value state to provide to setter when
 * called.
 * @returns Wrapped given method.
 */
export declare const wrapStateSetter: <Type = unknown>(setValueState: (value: Type | ((value: Type) => Type)) => void, currentValueState: Type) => ReturnType<typeof useState>[1];
/**
 * Renders given template string against all properties in current
 * instance.
 * @param template - Template to render.
 * @param scope - Scope to render given template again.
 * @returns Evaluated template or an empty string if something goes wrong.
 */
export declare const renderMessage: <Scope extends object = object>(template: unknown, scope: Scope) => string;
/**
 * Triggered when a value state changes like validation or focusing.
 * @param properties - Properties to search in.
 * @param name - Event callback name to search for in given properties.
 * @param synchronous - Indicates whether to trigger callback immediately or
 * later. Controlled components should call synchronously and uncontrolled
 * otherwise as long as callbacks are called in a state setter context.
 * @param parameters - Additional arguments to forward to callback.
 */
export declare const triggerCallbackIfExists: <P extends Omit<BaseProperties, 'model'> & {
    model: unknown;
}>(properties: P, name: string, synchronous?: boolean, ...parameters: Array<unknown>) => void;
/**
 * Translate known symbols in a copied and returned properties object.
 * @param properties - Object to translate.
 * @param copyBlobs - Determines whether to copy blobs as well.
 * @returns Transformed properties.
 */
export declare const translateKnownSymbols: <Type = unknown>(properties: Mapping<typeof NullSymbol | Type | typeof UndefinedSymbol>, copyBlobs?: boolean) => Mapping<Type>;
/**
 * Determines initial value representation as string.
 * @param properties - Components properties.
 * @param defaultProperties - Components default properties.
 * @param value - Current value to represent.
 * @param transformer - To apply to given value.
 * @param selection - Data mapping of allowed values.
 * @returns Determined initial representation.
 */
export declare function determineInitialRepresentation<T = unknown, P extends TextInputProps<T> = TextInputProps<T>, DP extends TextInputDefaultProperties<T> = TextInputDefaultProperties<T>>(properties: P, defaultProperties: DP, value: null | T, transformer: TextInputDataTransformation, selection?: NormalizedSelection | null): string;
/**
 * Determines initial value depending on given properties.
 * @param properties - Components properties.
 * @param defaultValue - Internal fallback value.
 * @param alternateValue - Alternate value to respect.
 * @returns Determined value.
 */
export declare const determineInitialValue: <Type = unknown, DefaultType = unknown>(properties: BaseProps & {
    default?: DefaultType;
    model?: {
        default?: DefaultType;
    };
}, defaultValue?: Type, alternateValue?: Type) => null | Type;
/**
 * Derives current validation state from given value.
 * @param properties - Input configuration.
 * @param currentState - Current validation state.
 * @param validators - Mapping from validation state key to corresponding
 * validator function.
 * @returns A boolean indicating if validation state has changed.
 */
export declare const determineValidationState: <Type = unknown, P extends DefaultProperties<Type> = DefaultProperties<Type>, MS extends Partial<ModelState> = Partial<ModelState>>(properties: P, currentState: MS, validators?: Mapping<() => boolean>) => boolean;
/**
 * Synchronizes property, state and model configuration:
 * Properties overwrites default properties which overwrites default model
 * properties.
 * @param properties - Properties to merge.
 * @param defaultModel - Default model to merge.
 * @returns Merged properties.
 */
export declare const mapPropertiesIntoModel: <P extends BaseProps = BaseProps, DP extends DefaultBaseProperties = DefaultBaseProperties>(properties: P, defaultModel: DP['model']) => DP;
/**
 * Calculate external properties (a set of all configurable properties).
 * @param properties - Properties to merge.
 * @returns External properties object.
 */
export declare const getConsolidatedProperties: <P extends BaseProps, R extends BaseProperties>(properties: P) => R;
/**
 * Determine normalized labels and values for selection and auto-complete
 * components.
 * @param selection - Selection component property configuration.
 * @returns Normalized sorted listed of labels and values.
 */
export declare function getLabelAndValues(selection?: NormalizedSelection | null): [Array<ReactNode | string>, Array<unknown>];
/**
 * Determine representation for given value while respecting existing labels.
 * @param value - To represent.
 * @param selection - Selection component property configuration.
 * @returns Determined representation.
 */
export declare function getRepresentationFromValueSelection(value: unknown, selection?: NormalizedSelection | null): null | string;
/**
 * Determine value from provided representation (for example user inputs).
 * @param label - To search a value for.
 * @param selection - Selection component property configuration.
 * @returns Determined value.
 */
export declare function getValueFromSelection<T>(label: ReactNode | string, selection: NormalizedSelection | null | undefined): T;
/**
 * Normalize given selection. NOTE: It is important to have an ordered list
 * to map values to labels and the other way around in a deterministic way.
 * @param selection - Selection component property configuration.
 * @param labels - Additional labels to take into account (for example provided
 * via a content management system).
 * @returns Determined normalized sorted selection configuration.
 */
export declare function normalizeSelection(selection?: SelectionDefinition | null, labels?: SelectionDefinition | null): NormalizedSelection | null | undefined;
/**
 * Applies configured value transformations.
 * @param configuration - Input configuration.
 * @param value - Value to transform.
 * @param transformer - To apply to given value.
 * @param trim - Indicates whether to trim strings or not.
 * @returns Transformed value.
 */
export declare const parseValue: <T = unknown, P extends TextInputDefaultProperties<T> = TextInputDefaultProperties<T>, InputType = T>(configuration: P, value: InputType | undefined, transformer: TextInputDataTransformation, trim?: boolean) => T;
/**
 * Represents configured value as string.
 * @param configuration - Input configuration.
 * @param value - To represent.
 * @param transformerMapping - To apply to given value.
 * @param final - Specifies whether it is a final representation.
 * @returns Transformed value.
 */
export declare function formatValue<T = unknown, P extends TextInputDefaultProperties<T> = TextInputDefaultProperties<T>>(configuration: P, value: null | T, transformerMapping: TextInputDataTransformation, final?: boolean): string;
export declare const formatDateTimeAsConfigured: (value?: DateTimeRepresentation | Date | null) => DateTimeRepresentation | null | undefined;
export declare const hashRegularExpression: (expression: RegExp) => string;
export declare const usePropertiesChangedIndicator: <Type = unknown>(properties: Properties<Type>) => {};
