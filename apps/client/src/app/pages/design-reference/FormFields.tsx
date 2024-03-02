import React from 'react';
import Card from '../../components/partial/card';
import Input from '../../components/form-fields/input';
import InputNumber from '../../components/form-fields/input-number';
import InputArea from '../../components/form-fields/input-area';
import Heading from '../../components/partial/heading';
import TImePicker from '../../components/form-fields/time-picker';
import CheckBox from '../../components/form-fields/check-box';
import Slider from '../../components/form-fields/slider';
import Select from '../../components/form-fields/select';

type Props = {};

const FormFields = (props: Props) => {
  return (
    <div>
      <Card>
        <div>
          <Heading type="h3">Form Fields</Heading>
          <Heading type="h4" className="mt-4">
            Inputs
          </Heading>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label htmlFor="">Input</label>
              <Input placeholder="this is placeholder" />
            </div>
            <div>
              <label htmlFor="">Input with prefix</label>
              <Input placeholder="this is placeholder" prefix=" Hi |" />
            </div>
            <div>
              <label htmlFor="">number</label>
              <InputNumber placeholder="this is placeholder" />
            </div>
            <div>
              <label htmlFor="">number prefix ex 1</label>
              <InputNumber
                placeholder="this is placeholder"
                type="number"
                prefix="₹ |"
              />
            </div>
            <div>
              <label htmlFor="">Time Picker</label>
              <TImePicker
                className="w-full px-3 py-2 h-10"
                placeholder="Time picker placeholder"
              />
            </div>
            <div>
              <label htmlFor="">Select</label>
              <Select
                placeholder="this is placeholder"
                options={[
                  {
                    label: 'Option 1',
                    value: 'option1',
                  },
                  {
                    label: 'Option 2',
                    value: 'option2',
                  },
                  {
                    label: 'Option 3',
                    value: 'option3',
                  },
                ]}
              ></Select>
            </div>
            <div>
              <label htmlFor="">Input Area</label>
              <InputArea placeholder="this is placeholder" />
            </div>
            <div></div>
          </div>

          <Heading type="h4" className="mt-6">
            Check boxes
          </Heading>
          <div className="grid grid-cols-4 gap-4 mt-2">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <CheckBox /> Monday
              </div>
              <div className="flex gap-2 items-center">
                <CheckBox /> Tuesday
              </div>
              <div className="flex gap-2 items-center">
                <CheckBox /> Wednesday
              </div>
              <div className="flex gap-2 items-center">
                <CheckBox /> Thursday
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <CheckBox /> Friday
              </div>
              <div className="flex gap-2 items-center">
                <CheckBox /> Saturday
              </div>
              <div className="flex gap-2 items-center">
                <CheckBox /> Sunday
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <div className="border rounded-lg py-2.5 px-3 flex justify-between items-center">
              <p className="text-black_300 text-sm">
                This component uses Slider for the following slider
              </p>
              <Slider value={true} />
            </div>
            <div className="border rounded-lg py-2.5 px-3 flex justify-between items-center">
              <p className="text-black_300 text-sm">
                This component uses Slider for the following slider
              </p>
              <Slider />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FormFields;
