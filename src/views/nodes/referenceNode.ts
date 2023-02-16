import { Reference } from '../../ocm/ocmv3';
import { OCMNode } from './ocmNode';
import { ComponentMeta } from '../componentDescriptorToNode';

export type ReferenceTypes = Reference;

export class ReferenceNode extends OCMNode {
	kind: string = "Reference";

	meta: ComponentMeta;

	constructor(reference: Reference, meta: ComponentMeta) {
		super(reference.name, reference);
		this.meta = meta;
	}

	// @ts-ignore
	get command(): Command | undefined {
		return {
			command: "ocm.reference.open",
			arguments: [this.meta, this.resource, this.kind],
			title: 'View Reference Definition',
		};
	}
}