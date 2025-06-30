# NOTE

- Edit `tenants` policy temporarily

  From:

  ```sql
  CREATE POLICY tenant_isolation_tenants ON tenants
      FOR SELECT TO authenticated
      USING (id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());
  ```

  To:

  ```sql
  CREATE POLICY tenant_isolation_tenants ON tenants
      FOR SELECT TO anon, authenticated
      USING (true);
  ```
