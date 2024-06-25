import { Button, Form, FormProps, Input, message } from "antd";
import { useEffect, useState } from "react";
import { IEditFooterType, IFooterDataType } from "src/interfaces";
import HomepageService from "src/services/homepage/homepageService";

type FieldType = {
  address?: string;
  phone?: string;
  website?: string;
  socialMediaLabel?: string;
  socialMediaUrl?: string;
  secondSocialMediaLabel?: string;
  secondSocialMediaUrl?: string;
};

const AdminFooter = () => {
  const [data, setData] = useState<IFooterDataType[]>([]);
  const [initialValue, setInitialValue] = useState<FieldType>();
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    if (values.address !== initialValue?.address) {
      const data: IEditFooterType = { content: values.address ?? "" };
      editFooter(1, data);
    }
    if (values.phone !== initialValue?.phone) {
      const data: IEditFooterType = { content: values.phone ?? "" };
      editFooter(2, data);
    }
    if (
      values.socialMediaLabel !== initialValue?.socialMediaLabel ||
      values.socialMediaUrl !== initialValue?.socialMediaUrl
    ) {
      const data: IEditFooterType = {
        content: values.socialMediaLabel ?? "",
        url: values.socialMediaUrl,
      };
      editFooter(4, data);
    }
    if (
      values.secondSocialMediaLabel !== initialValue?.secondSocialMediaLabel ||
      values.secondSocialMediaUrl !== initialValue?.secondSocialMediaUrl
    ) {
      const data: IEditFooterType = {
        content: values.secondSocialMediaLabel ?? "",
        url: values.secondSocialMediaUrl,
      };
      editFooter(5, data);
    }
    if (values.website !== initialValue?.website) {
      const data: IEditFooterType = { content: values.website ?? "" };
      editFooter(3, data);
    }
  };

  const getFooterList = async () => {
    try {
      const res = await HomepageService.listFooter();
      if (res) setData(res);
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const editFooter = async (id: number, data: IEditFooterType) => {
    try {
      const res = await HomepageService.editFooter(id, data);
      if (res.message == "success") {
        message.success(`Edit footer successfully.`);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getFooterList();
  }, []);

  useEffect(() => {
    if (data.length) {
      const initData: FieldType = {
        address: data[0].content,
        socialMediaLabel: data[3].content,
        socialMediaUrl: data[3].url,
        phone: data[1].content,
        secondSocialMediaLabel: data[4].content,
        secondSocialMediaUrl: data[4].url,
        website: data[2].content,
      };

      form.setFieldsValue({ ...initData });

      setInitialValue(initData);
    }
  }, [data]);

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 800 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType> label="Address" name="address">
        <Input placeholder="Address" />
      </Form.Item>
      <Form.Item<FieldType> label="Phone" name="phone">
        <Input addonBefore="+(84)" defaultValue="mysite" />
      </Form.Item>
      <Form.Item<FieldType> label="Website" name="website">
        <Input
          addonBefore="http://"
          addonAfter=".edu.vn"
          defaultValue="mysite"
        />
      </Form.Item>
      {/* <Form.Item<FieldType> label="Social media" >
        <Input placeholder="Social media" />
      </Form.Item> */}
      <Form.Item label="Social Media">
        <div>
          <Form.Item name="socialMediaLabel">
            <Input placeholder="Label" />
          </Form.Item>
          <Form.Item name="socialMediaUrl">
            <Input placeholder="URL" />
          </Form.Item>
        </div>
      </Form.Item>
      <Form.Item label="Second Social Media">
        <div>
          <Form.Item name="secondSocialMediaLabel">
            <Input placeholder="Label" />
          </Form.Item>
          <Form.Item name="secondSocialMediaUrl">
            <Input placeholder="URL" />
          </Form.Item>
        </div>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit">Save</Button>
      </Form.Item>
    </Form>
  );
};
export default AdminFooter;
